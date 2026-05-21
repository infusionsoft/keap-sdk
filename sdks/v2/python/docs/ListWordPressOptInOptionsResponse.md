# ListWordPressOptInOptionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wordpress_opt_in_options** | [**List[WordPressOptInOption]**](WordPressOptInOption.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_word_press_opt_in_options_response import ListWordPressOptInOptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWordPressOptInOptionsResponse from a JSON string
list_word_press_opt_in_options_response_instance = ListWordPressOptInOptionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListWordPressOptInOptionsResponse.to_json())

# convert the object into a dict
list_word_press_opt_in_options_response_dict = list_word_press_opt_in_options_response_instance.to_dict()
# create an instance of ListWordPressOptInOptionsResponse from a dict
list_word_press_opt_in_options_response_from_dict = ListWordPressOptInOptionsResponse.from_dict(list_word_press_opt_in_options_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


