

# CreateReferralRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**description** | **String** | The referral description. |  [optional] |
|**source** | **String** | The source for the referral. |  [optional] |
|**contactId** | **String** | The referral&#39;s contact ID. |  |
|**referralPartnerId** | **String** | The referring affiliate ID. |  [optional] |
|**referralTime** | **ZonedDateTime** | The time of the referral. |  [optional] |
|**expirationTime** | **ZonedDateTime** | When the referral expires. |  [optional] |
|**ipAddress** | **String** | The IP address of the referral. |  [optional] |
|**referralType** | [**ReferralTypeEnum**](#ReferralTypeEnum) | The referral type. |  [optional] |



## Enum: ReferralTypeEnum

| Name | Value |
|---- | -----|
| COOKIE | &quot;COOKIE&quot; |
| MANUAL | &quot;MANUAL&quot; |
| PERMANENT | &quot;PERMANENT&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

