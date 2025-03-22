<?php
declare(strict_types=1);

namespace App\Http\Controllers\API\v1\Rest;

use App\Http\Requests\FilterParamsRequest;
use App\Http\Requests\FilterRequest;
use App\Http\Requests\SearchRequest;
use App\Models\Product;
use App\Models\Shop;
use App\Repositories\FilterRepository\FilterRepository;

class FilterController extends RestBaseController
{
    public function __construct(private FilterRepository $repository)
    {
        parent::__construct();
    }

    public function filter(FilterRequest $request): array
    {
        $filter = $request->merge([
            'status'      => Product::PUBLISHED,
            'shop_status' => Shop::APPROVED
        ])->all();

        return $this->repository->filter($filter);
    }

    public function shopFilter(FilterParamsRequest $request): array
    {
        return $this->repository->shopFilter($request->all());
    }

    public function search(SearchRequest $request): array
    {
        return $this->repository->search($request->validated());
    }

    public function searchMany(SearchRequest $request): array
    {
        return $this->repository->searchMany($request->validated());
    }
}
