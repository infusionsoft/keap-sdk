# .TaskAppointmentsApi

All URIs are relative to *https://api.keap.com/crm*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAppointments**](TaskAppointmentsApi.md#listAppointments) | **GET** /rest/v2/taskAppointments | List Task Appointments


# **listAppointments**
> ListTaskAppointmentsResponse listAppointments()

Retrieves a paginated list of Task Appointments

### Example


```typescript
import { createConfiguration, TaskAppointmentsApi } from '';
import type { TaskAppointmentsApiListAppointmentsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TaskAppointmentsApi(configuration);

const request: TaskAppointmentsApiListAppointmentsRequest = {
    // Filter to apply. Allowed fields:  - `contact_id`, `user_id` - `start_time`, `end_time`, `create_time`, `update_time` - ISO 8601 date/time - Custom field names - reference a custom field by its name (e.g. `priority`, `location_type`).   Standard field names take precedence over a custom field sharing the same name.  Allowable operators: - `contact_id`, `user_id`: `==` - time fields, and numeric/date custom fields: `==`, `<`, `<=`, `>`, `>=` - text/choice/multi-select custom fields: `==` (prefix wildcard supported, e.g. `value*`)  URL-encode operators (`==` → `%3D%3D`, `>` → `%3E`, `<` → `%3C`) and combine filters with `;` (AND).  Examples: - `filter=contact_id%3D%3D123` - `filter=start_time%3E%3D2024-01-01T00:00:00Z%3Bend_time%3C2024-02-01T00:00:00Z` - `filter=priority%3D%3DHigh` (custom field)  (optional)
  filter: "filter_example",
    // Page token (optional)
  pageToken: "page_token_example",
    // Attribute and direction to order items. One of the following fields:  - `start_time` - `end_time` - `create_time` - `update_time`  One of the following directions:  - `asc` - `desc`  Example: `order_by=start_time asc`  If omitted, appointments are returned in a stable default order (ascending by internal sequence) so that pagination remains consistent across pages.  (optional)
  orderBy: "order_by_example",
    // Total number of items to return per page (optional)
  pageSize: 0,
};

const data = await apiInstance.listAppointments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | Filter to apply. Allowed fields:  - &#x60;contact_id&#x60;, &#x60;user_id&#x60; - &#x60;start_time&#x60;, &#x60;end_time&#x60;, &#x60;create_time&#x60;, &#x60;update_time&#x60; - ISO 8601 date/time - Custom field names - reference a custom field by its name (e.g. &#x60;priority&#x60;, &#x60;location_type&#x60;).   Standard field names take precedence over a custom field sharing the same name.  Allowable operators: - &#x60;contact_id&#x60;, &#x60;user_id&#x60;: &#x60;&#x3D;&#x3D;&#x60; - time fields, and numeric/date custom fields: &#x60;&#x3D;&#x3D;&#x60;, &#x60;&lt;&#x60;, &#x60;&lt;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&gt;&#x3D;&#x60; - text/choice/multi-select custom fields: &#x60;&#x3D;&#x3D;&#x60; (prefix wildcard supported, e.g. &#x60;value*&#x60;)  URL-encode operators (&#x60;&#x3D;&#x3D;&#x60; → &#x60;%3D%3D&#x60;, &#x60;&gt;&#x60; → &#x60;%3E&#x60;, &#x60;&lt;&#x60; → &#x60;%3C&#x60;) and combine filters with &#x60;;&#x60; (AND).  Examples: - &#x60;filter&#x3D;contact_id%3D%3D123&#x60; - &#x60;filter&#x3D;start_time%3E%3D2024-01-01T00:00:00Z%3Bend_time%3C2024-02-01T00:00:00Z&#x60; - &#x60;filter&#x3D;priority%3D%3DHigh&#x60; (custom field)  | (optional) defaults to undefined
 **pageToken** | [**string**] | Page token | (optional) defaults to undefined
 **orderBy** | [**string**] | Attribute and direction to order items. One of the following fields:  - &#x60;start_time&#x60; - &#x60;end_time&#x60; - &#x60;create_time&#x60; - &#x60;update_time&#x60;  One of the following directions:  - &#x60;asc&#x60; - &#x60;desc&#x60;  Example: &#x60;order_by&#x3D;start_time asc&#x60;  If omitted, appointments are returned in a stable default order (ascending by internal sequence) so that pagination remains consistent across pages.  | (optional) defaults to undefined
 **pageSize** | [**number**] | Total number of items to return per page | (optional) defaults to undefined


### Return type

**ListTaskAppointmentsResponse**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**405** | Method Not Allowed |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |
**501** | Method Not Implemented |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


