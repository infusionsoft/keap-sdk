# CreateIntegrationsWordPressOptInOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The unique identifier of the opt-in option, which must be an alphanumeric string | [optional] 
**name** | **str** | The display name of the opt-in option | [optional] 

## Example

```python
from keap_core_v2_client.models.create_integrations_word_press_opt_in_option import CreateIntegrationsWordPressOptInOption

# TODO update the JSON string below
json = "{}"
# create an instance of CreateIntegrationsWordPressOptInOption from a JSON string
create_integrations_word_press_opt_in_option_instance = CreateIntegrationsWordPressOptInOption.from_json(json)
# print the JSON string representation of the object
print(CreateIntegrationsWordPressOptInOption.to_json())

# convert the object into a dict
create_integrations_word_press_opt_in_option_dict = create_integrations_word_press_opt_in_option_instance.to_dict()
# create an instance of CreateIntegrationsWordPressOptInOption from a dict
create_integrations_word_press_opt_in_option_from_dict = CreateIntegrationsWordPressOptInOption.from_dict(create_integrations_word_press_opt_in_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


