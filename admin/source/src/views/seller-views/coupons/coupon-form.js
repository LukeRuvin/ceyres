import React, { useState } from 'react';
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
import moment from 'moment/moment';
import { useTranslation } from 'react-i18next';
import { shallowEqual, useSelector } from 'react-redux';

export default function CouponForm({ form, handleSubmit }) {
  const { t } = useTranslation();
  const { defaultLang, languages } = useSelector(
    (state) => state.formLang,
    shallowEqual,
  );
  const { activeMenu } = useSelector((state) => state.menu, shallowEqual);

  const forOptions = [
    {
      label: t('delivery.fee'),
      value: 'delivery_fee',
      key: 'delivery_fee',
    },
    {
      label: t('total.price'),
      value: 'total_price',
      key: 'total_price',
    },
    {
      label: t('booking.total.price'),
      value: 'booking_total_price',
      key: 'booking_total_price',
    },
  ];

  // states
  const [loadingBtn, setLoadingBtn] = useState(false);

  //submit form
  const onFinish = (values) => {
    setLoadingBtn(true);
    handleSubmit(values).finally(() => setLoadingBtn(false));
  };

  return (
    <Form
      form={form}
      name='coupon-form'
      layout='vertical'
      onFinish={onFinish}
      initialValues={{ for: 'delivery_fee', type: 'fix', ...activeMenu?.data }}
    >
      <Row gutter={12}>
        <Col span={12}>
          {languages.map((item) => (
            <Form.Item
              key={'title' + item.id}
              label={t('title')}
              name={`title[${item.locale}]`}
              rules={[
                {
                  required: item.locale === defaultLang,
                  message: t('required'),
                },
              ]}
              hidden={item.locale !== defaultLang}
            >
              <Input />
            </Form.Item>
          ))}
        </Col>

        <Col span={12}>
          <Form.Item
            label={t('name')}
            name='name'
            rules={[{ required: true, message: t('required') }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label={t('type')}
            name='type'
            rules={[{ required: true, message: t('required') }]}
          >
            <Select>
              <Select.Option value='fix'>{t('fix')}</Select.Option>
              <Select.Option value='percent'>{t('percent')}</Select.Option>
            </Select>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name='expired_at'
            label={t('expired.at')}
            rules={[{ required: true, message: t('required') }]}
          >
            <DatePicker
              className='w-100'
              placeholder=''
              disabledDate={(current) => moment().add(-1, 'days') >= current}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label={t('quantity')}
            name='qty'
            rules={[{ required: true, message: t('required') }]}
          >
            <InputNumber min={0} className='w-100' />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label={t('price')}
            name='price'
            rules={[{ required: true, message: t('required') }]}
          >
            <InputNumber min={0} className='w-100' />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name='for'
            label='for'
            rules={[{ required: true, message: t('required') }]}
          >
            <Select options={forOptions} />
          </Form.Item>
        </Col>
      </Row>
      <Button type='primary' htmlType='submit' loading={loadingBtn}>
        {t('submit')}
      </Button>
    </Form>
  );
}
