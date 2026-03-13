

# UpdateLeadSourceExpenseRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**title** | **String** | The title of the lead source expense |  [optional] |
|**notes** | **String** | The notes for the lead source expense |  [optional] |
|**amount** | **Long** | The cost of the lead source expense. The value should be in the smallest unit of currency for your currency locale. For example, if your currency locale is USD, then the smallest unit of currency is in cents, $225.50 would be provided in the request as 22550. |  [optional] |
|**incurredTime** | **ZonedDateTime** | The time that the lead source expense was incurred. |  [optional] |


## Implemented Interfaces

* Serializable

