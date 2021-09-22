import { Checkbox, Select, Space, Form, Input } from 'antd'
import { countries } from '../../utils/data'
import { ButtonContainer, FormContainer, SubmitButton, Title, Container, PurchaseInput} from './styles'

export const BillingForm: React.FC = () => {
  return (
    <FormContainer>
      <div>
        <Title>Billing Adress:</Title>
        <Space direction="vertical" style={{ marginLeft: 20, width: 600 }}>
          <Form.Item
            name="b_adress1"
            rules={[
              {
                required: true,
                message: 'Please input your select your firstadress!'
              }
            ]}
          >
            <Input placeholder="Adress Line 1" />
          </Form.Item>
          <Form.Item
            name="b_adress2"
            rules={[
              { required: true, message: 'Please complete your address' }
            ]}
          >
            <Input placeholder="Adress Line 2" />
          </Form.Item>
          <Space direction="horizontal">
            <Form.Item
              name="b_city"
              rules={[
                {
                  required: true,
                  message: 'Please input your select your city'
                }
              ]}
            >
              <Select placeholder="City" style={{ width: 200 }}>
                {countries.map((region) => (
                  <Select.Option key={region.id} value={region.value}>
                    {region.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="b_state"
              rules={[
                {
                  required: true,
                  message: 'Please input your select your state'
                }
              ]}
            >
              <Select placeholder="State" style={{ width: 200 }}>
                {countries.map((region) => (
                  <Select.Option key={region.id} value={region.value}>
                    {region.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="b_zipcode"
              rules={[
                {
                  required: true,
                  message: 'Please input your zipcode'
                }
              ]}
            >
              <Input placeholder="ZIP Code" />
            </Form.Item>
          </Space>

          <Form.Item name="same_shipping_adress?" valuePropName="checked">
            <Checkbox>Use shipping address as same as billing address</Checkbox>
          </Form.Item>
        </Space>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 40
        }}
      >
        <Title>Check the boxes below:</Title>
        <Container
          
        >
          <Form.Item name="fuelcut?" valuePropName="checked">
            <Checkbox>
              Does any veihicle need to be equiped with a fuel cut off device?
            </Checkbox>
          </Form.Item>
          <Form.Item name="trackers?" valuePropName="checked">
            <Checkbox>
              Will any trackers to be installed on a bike, truck or machinery?
            </Checkbox>
          </Form.Item>
        </Container>
        <Form.Item name="identify?" valuePropName="checked">
          <Checkbox>Will you need to identify the fleet drivers?</Checkbox>
        </Form.Item>
        <Form.Item
          name="purchaseTrackers"
          rules={[{ required: true, message: 'Please input your trackers' }]}
        >
          <PurchaseInput
            placeholder="How many trackers would you like to purchase?"
            type="number"
           
          />
        </Form.Item>
        <ButtonContainer>
          <SubmitButton type="primary" htmlType="submit">
            Order Now
          </SubmitButton>
        </ButtonContainer>
      </div>
    </FormContainer>
  )
}