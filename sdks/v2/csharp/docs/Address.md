# Keap.Core.V2.Model.Address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Country** | **string** | Deprecated. The long-name descriptive version of the Country Code. Please use &#39;country_code&#39; for POST/PATCH operations. Maximum length is 100 characters. | [optional] 
**Line1** | **string** | Street address line 1. Maximum length is 75 characters for the BILLING address and 100 characters for the SHIPPING and OTHER addresses. | [optional] 
**Line2** | **string** | Street address line 2. Maximum length is 75 characters for the BILLING address and 100 characters for the SHIPPING and OTHER addresses. | [optional] 
**Locality** | **string** | The municipality to which the address belongs. Maximum length is 50 characters for the BILLING address and 100 characters for the SHIPPING and OTHER addresses. | [optional] 
**Region** | **string** | The long-name descriptive version of the Region Code. Please use &#39;region_code&#39; for POST/PATCH operations. Maximum length is 50 characters. | [optional] 
**Field** | **string** | Address type field | [optional] 
**CountryCode** | **string** | An ISO 3166-2 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) | [optional] 
**PostalCode** | **string** | Postal or ZIP code. Maximum length is 15 characters for the BILLING and OTHER addresses and 20 characters for the SHIPPING address. | [optional] 
**RegionCode** | **string** | An ISO 3166-2 Province Code, such as one of the US States (https://en.wikipedia.org/wiki/ISO_3166-2:US) | [optional] 
**ZipCode** | **string** | ZIP code (US). Maximum length is 15 characters for the BILLING and OTHER addresses and 20 characters for the SHIPPING address. | [optional] 
**ZipFour** | **string** | ZIP+4 extension. Maximum length is 10 characters. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

