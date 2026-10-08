# ListTaskAppointmentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_appointments** | [**List[RestTaskAppointment]**](RestTaskAppointment.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_task_appointments_response import ListTaskAppointmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTaskAppointmentsResponse from a JSON string
list_task_appointments_response_instance = ListTaskAppointmentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTaskAppointmentsResponse.to_json())

# convert the object into a dict
list_task_appointments_response_dict = list_task_appointments_response_instance.to_dict()
# create an instance of ListTaskAppointmentsResponse from a dict
list_task_appointments_response_from_dict = ListTaskAppointmentsResponse.from_dict(list_task_appointments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


