

# FileMetadata


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | File ID |  [optional] |
|**category** | [**CategoryEnum**](#CategoryEnum) | File category |  [optional] |
|**fileName** | **String** | File name with extension |  [optional] |
|**isPublic** | **Boolean** | Whether file is publicly accessible |  [optional] |
|**contactId** | **String** | Associated contact ID |  [optional] |
|**createdById** | **String** | ID of user who created the file |  [optional] |
|**remoteFileKey** | **String** | Remote storage key |  [optional] |
|**fileBoxType** | [**FileBoxTypeEnum**](#FileBoxTypeEnum) | File box type |  [optional] |
|**fileSize** | **Long** | File size in bytes |  [optional] |
|**createdTime** | **String** | Creation timestamp (ISO-8601) |  [optional] |
|**updatedTime** | **String** | Last update timestamp (ISO-8601) |  [optional] |



## Enum: CategoryEnum

| Name | Value |
|---- | -----|
| ATTACHMENTS | &quot;ATTACHMENTS&quot; |
| CART | &quot;CART&quot; |
| DOCUMENTS | &quot;DOCUMENTS&quot; |
| HIDDEN | &quot;HIDDEN&quot; |
| INVOICE | &quot;INVOICE&quot; |
| LOGO | &quot;LOGO&quot; |
| TICKETS | &quot;TICKETS&quot; |
| WEB_FORM | &quot;WEB_FORM&quot; |
| FUNNEL | &quot;FUNNEL&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: FileBoxTypeEnum

| Name | Value |
|---- | -----|
| APPLICATION | &quot;APPLICATION&quot; |
| IMAGE | &quot;IMAGE&quot; |
| FAX | &quot;FAX&quot; |
| ATTACHMENT | &quot;ATTACHMENT&quot; |
| TICKET | &quot;TICKET&quot; |
| CONTACT | &quot;CONTACT&quot; |
| DIGITAL_PRODUCT | &quot;DIGITAL_PRODUCT&quot; |
| IMPORT | &quot;IMPORT&quot; |
| HIDDEN | &quot;HIDDEN&quot; |
| WEB_FORM | &quot;WEB_FORM&quot; |
| STYLED_CART | &quot;STYLED_CART&quot; |
| RESAMPLED_IMAGE | &quot;RESAMPLED_IMAGE&quot; |
| TEMPLATE_THUMBNAIL | &quot;TEMPLATE_THUMBNAIL&quot; |
| FUNNEL | &quot;FUNNEL&quot; |
| LOGO_THUMBNAIL | &quot;LOGO_THUMBNAIL&quot; |
| UNLAYER | &quot;UNLAYER&quot; |
| BRANDING_CENTER_LOGO | &quot;BRANDING_CENTER_LOGO&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

