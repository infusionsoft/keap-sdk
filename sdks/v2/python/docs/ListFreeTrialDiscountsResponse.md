# ListFreeTrialDiscountsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free_trial_discounts** | [**List[FreeTrialDiscount]**](FreeTrialDiscount.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_free_trial_discounts_response import ListFreeTrialDiscountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFreeTrialDiscountsResponse from a JSON string
list_free_trial_discounts_response_instance = ListFreeTrialDiscountsResponse.from_json(json)
# print the JSON string representation of the object
print(ListFreeTrialDiscountsResponse.to_json())

# convert the object into a dict
list_free_trial_discounts_response_dict = list_free_trial_discounts_response_instance.to_dict()
# create an instance of ListFreeTrialDiscountsResponse from a dict
list_free_trial_discounts_response_from_dict = ListFreeTrialDiscountsResponse.from_dict(list_free_trial_discounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


