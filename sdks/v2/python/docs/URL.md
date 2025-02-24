# URL


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authority** | **str** |  | [optional] 
**content** | **object** |  | [optional] 
**default_port** | **int** |  | [optional] 
**file** | **str** |  | [optional] 
**host** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**port** | **int** |  | [optional] 
**protocol** | **str** |  | [optional] 
**query** | **str** |  | [optional] 
**ref** | **str** |  | [optional] 
**user_info** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.url import URL

# TODO update the JSON string below
json = "{}"
# create an instance of URL from a JSON string
url_instance = URL.from_json(json)
# print the JSON string representation of the object
print(URL.to_json())

# convert the object into a dict
url_dict = url_instance.to_dict()
# create an instance of URL from a dict
url_from_dict = URL.from_dict(url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


