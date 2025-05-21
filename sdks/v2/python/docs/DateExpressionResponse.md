# DateExpressionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[DateExpression]**](DateExpression.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.date_expression_response import DateExpressionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DateExpressionResponse from a JSON string
date_expression_response_instance = DateExpressionResponse.from_json(json)
# print the JSON string representation of the object
print(DateExpressionResponse.to_json())

# convert the object into a dict
date_expression_response_dict = date_expression_response_instance.to_dict()
# create an instance of DateExpressionResponse from a dict
date_expression_response_from_dict = DateExpressionResponse.from_dict(date_expression_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


