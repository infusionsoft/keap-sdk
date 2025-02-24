# Transaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_id** | **str** | Reference to the contact the transaction was for. | [optional] 
**id** | **str** | The unique identifier of the transaction. | [optional] 
**is_live** | **bool** | true if this is a live transaction, false if the transaction is a test or sandbox transaction. | [optional] 
**is_successful** | **bool** | true if the transaction resulted in a success, false if the transaction resulted in a failure or error. | [optional] 
**order_id** | **str** | Reference to the order this transaction was for | [optional] 
**payment_gateway_id** | **str** | Reference to the payment processor to where the transaction attempt was made. | [optional] 
**payment_gateway_type** | **str** | The type of payment processor. Possible values are: PAYPAL, STRIPE, KEAP_PAY, AUTHORIZE, EWAY, OTHER. For transactions that did got go through a processor/gateway, value is MANUAL | [optional] 
**payment_id** | **str** | Reference to the payment record that on successful transactions. No reference if the transaction failed. | [optional] 
**transaction_amount** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**transaction_time** | **str** | ISO date-time of the transaction. e.g 2024-04-28 11:25:44 | [optional] 
**transaction_type** | **str** | The type of transaction. Possible values: CAPTURE, VOID, REFUND, CREDIT, APPROVAL | [optional] 

## Example

```python
from keap_core_v2_client.models.transaction import Transaction

# TODO update the JSON string below
json = "{}"
# create an instance of Transaction from a JSON string
transaction_instance = Transaction.from_json(json)
# print the JSON string representation of the object
print(Transaction.to_json())

# convert the object into a dict
transaction_dict = transaction_instance.to_dict()
# create an instance of Transaction from a dict
transaction_from_dict = Transaction.from_dict(transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


