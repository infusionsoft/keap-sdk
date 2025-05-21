# BaseListResponseDeal

The list responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token for the next page of results. | [optional] 

## Example

```python
from keap_core_v2_client.models.base_list_response_deal import BaseListResponseDeal

# TODO update the JSON string below
json = "{}"
# create an instance of BaseListResponseDeal from a JSON string
base_list_response_deal_instance = BaseListResponseDeal.from_json(json)
# print the JSON string representation of the object
print(BaseListResponseDeal.to_json())

# convert the object into a dict
base_list_response_deal_dict = base_list_response_deal_instance.to_dict()
# create an instance of BaseListResponseDeal from a dict
base_list_response_deal_from_dict = BaseListResponseDeal.from_dict(base_list_response_deal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


