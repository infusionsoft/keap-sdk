

# RestEmailAddressStatus

Email address opt-in status information

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**email** | **String** | The email address |  |
|**optedIn** | **Boolean** | Whether the email address is opted in for marketing |  |
|**status** | [**StatusEnum**](#StatusEnum) | The opt-in status of the email address |  |
|**createTime** | **ZonedDateTime** | When the email status was first recorded, in ISO-8601 format |  |
|**lastClickTime** | **ZonedDateTime** | The most recent click on an email sent to this address, in ISO-8601 format |  [optional] |
|**lastOpenTime** | **ZonedDateTime** | The most recent open of an email sent to this address, in ISO-8601 format |  [optional] |
|**lastSentTime** | **ZonedDateTime** | The most recent time an email was sent to this address, in ISO-8601 format |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| UNENGAGED_MARKETABLE | &quot;UNENGAGED_MARKETABLE&quot; |
| SINGLE_OPT_IN | &quot;SINGLE_OPT_IN&quot; |
| DOUBLE_OPT_IN | &quot;DOUBLE_OPT_IN&quot; |
| CONFIRMED | &quot;CONFIRMED&quot; |
| UNENGAGED_NON_MARKETABLE | &quot;UNENGAGED_NON_MARKETABLE&quot; |
| NON_MARKETABLE | &quot;NON_MARKETABLE&quot; |
| LOCKDOWN | &quot;LOCKDOWN&quot; |
| BOUNCE | &quot;BOUNCE&quot; |
| HARD_BOUNCE | &quot;HARD_BOUNCE&quot; |
| MANUAL | &quot;MANUAL&quot; |
| ADMIN | &quot;ADMIN&quot; |
| SYSTEM | &quot;SYSTEM&quot; |
| LIST_UNSUBSCRIBE | &quot;LIST_UNSUBSCRIBE&quot; |
| FEEDBACK | &quot;FEEDBACK&quot; |
| SPAM | &quot;SPAM&quot; |
| INVALID | &quot;INVALID&quot; |
| DEACTIVATED | &quot;DEACTIVATED&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

