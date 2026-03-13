

# Referral


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The unique identifier for this referral. |  [optional] |
|**description** | **String** | The referral description. |  [optional] |
|**source** | **String** | The source for the referral. |  [optional] |
|**contactId** | **String** | The referral&#39;s contact_id. |  [optional] |
|**referralPartnerId** | **String** | The referring affiliate ID. |  [optional] |
|**referralTime** | **ZonedDateTime** | The time of the referral. |  [optional] |
|**expirationTime** | **ZonedDateTime** | The time when the referral expires. |  [optional] |
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

