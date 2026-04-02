# Payment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the payment. | [optional] 
**type** | **str** | A label describing the type of payment made. | [optional] 
**amount** | **float** | The payment amount. | [optional] 
**note** | **str** | A note about the payment. | [optional] 
**status** | **str** | Provides the current status of the payment, if available. | [optional] 
**commissioned** | **bool** | Whether this payment had a commission. | [optional] 
**synced** | **bool** | Whether or not the data is synced externally. | [optional] 
**payment_time** | **datetime** | When this payment was made. In ISO-8601 format. | [optional] 
**refund_payment_id** | **str** | If this payment had a refund, this refers to the id of the refund payment. | [optional] 
**contact_id** | **str** | The id of the contact the payment is associated with. | [optional] 
**order_ids** | **List[str]** | List of order ids the payment was made was against. | [optional] 
**update_time** | **datetime** | When this payment was updated. In ISO-8601 format. | [optional] 
**external_transaction_id** | **str** | An external id - typically from a payment processor - that references this transaction. | [optional] 
**merchant_account_id** | **str** | The merchant account id through which the transaction was made. | [optional] 
**merchant_account_type** | **str** | The merchant account id through which the transaction was made. | [optional] 
**payment_method** | [**PaymentMethod**](PaymentMethod.md) | Details of the payment method used for this transaction. | [optional] 

## Example

```python
from keap_core_v2_client.models.payment import Payment

# TODO update the JSON string below
json = "{}"
# create an instance of Payment from a JSON string
payment_instance = Payment.from_json(json)
# print the JSON string representation of the object
print(Payment.to_json())

# convert the object into a dict
payment_dict = payment_instance.to_dict()
# create an instance of Payment from a dict
payment_from_dict = Payment.from_dict(payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


