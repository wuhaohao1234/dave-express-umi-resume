import { Button, Card,  Input, Form } from 'antd';
import { connect, Dispatch, FormattedMessage, formatMessage } from 'umi';
import React, { FC } from 'react';
import { PageContainer } from '@ant-design/pro-layout';

const FormItem = Form.Item;
interface FormBasicFormProps {
  submitting: boolean;
  dispatch: Dispatch;
}

const FormBasicForm: FC<FormBasicFormProps> = (props) => {
  const { submitting } = props;
  const [form] = Form.useForm();
  const [showPublicUsers, setShowPublicUsers] = React.useState(false);
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 10 },
    },
  };

  const submitFormLayout = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 10, offset: 7 },
    },
  };

  const onFinish = (values: { [key: string]: any }) => {
    const { dispatch } = props;
    dispatch({
      type: 'formBasicForm/submitRegularForm',
      payload: values,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (changedValues: { [key: string]: any }) => {
    const { publicType } = changedValues;
    if (publicType) setShowPublicUsers(publicType === '2');
  };

  return (
    <PageContainer content={<FormattedMessage id="formbasicform.basic.description" />}>
      <Card bordered={false}>
        <Form
          hideRequiredMark
          style={{ marginTop: 8 }}
          form={form}
          name="basic"
          initialValues={{ public: '1' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={onValuesChange}
        >
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="formbasicform.title.label" />}
            name="name"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'formbasicform.title.required' }),
              },
            ]}
          >
            <Input placeholder={formatMessage({ id: 'formbasicform.title.placeholder' })} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="formbasicform.title.age" />}
            name="age"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'formbasicform.title.required' }),
              },
            ]}
          >
            <Input placeholder={formatMessage({ id: 'formbasicform.age.placeholder' })} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<FormattedMessage id="formbasicform.title.sex" />}
            name="sex"
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'formbasicform.title.required' }),
              },
            ]}
          >
            <Input placeholder={formatMessage({ id: 'formbasicform.sex.placeholder' })} />
          </FormItem>
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button type="primary" htmlType="submit" loading={submitting}>
              <FormattedMessage id="formbasicform.form.submit" />
            </Button>
            <Button style={{ marginLeft: 8 }}>
              <FormattedMessage id="formbasicform.form.save" />
            </Button>
          </FormItem>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default connect(({ loading }: { loading: { effects: { [key: string]: boolean } } }) => ({
  submitting: loading.effects['formBasicForm/submitRegularForm'],
}))(FormBasicForm);
