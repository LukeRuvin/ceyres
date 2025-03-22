<?php
declare(strict_types=1);

namespace App\Http\Controllers\API\v1\Dashboard\Seller;

use App\Helpers\ResponseError;
use App\Http\Requests\Review\AnswerReviewRequest;
use App\Http\Requests\Review\PaginateRequest;
use App\Http\Resources\ReviewResource;
use App\Models\Review;
use App\Repositories\ReviewRepository\ReviewRepository;
use App\Services\ReviewService\ReviewService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ReviewController extends SellerBaseController
{

    public function __construct(private ReviewRepository $repository, private ReviewService $service)
    {
        parent::__construct();
    }

    /**
     * @param PaginateRequest $request
     * @return AnonymousResourceCollection
     */
    public function paginate(PaginateRequest $request): AnonymousResourceCollection
    {
        $filter = $request->merge(['assign' => 'shop', 'assign_id' => $this->shop->id])->all();

        return ReviewResource::collection($this->repository->paginate($filter));
    }

    public function update(int $id, AnswerReviewRequest $request): JsonResponse
    {
        $data = $request->validated();
        $data['shop_id'] = $this->shop->id;

        $result = $this->service->update($id, $data);

        if (!data_get($result, 'status')) {
            return $this->onErrorResponse(['code' => ResponseError::ERROR_404]);
        }

        return $this->successResponse(
            __('errors.' . ResponseError::NO_ERROR, locale: $this->language),
            ReviewResource::make($result['data'])
        );
    }

    /**
     * @param Review $review
     * @return JsonResponse
     */
    public function show(Review $review): JsonResponse
    {
        $review = $this->repository->show($review);

        if ($review->assignable_id !== $this->shop->id) {
            return $this->onErrorResponse(['code' => ResponseError::ERROR_404]);
        }

        return $this->successResponse(
            __('errors.' . ResponseError::NO_ERROR, locale: $this->language),
            ReviewResource::make($review)
        );
    }
}
