/*
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.812056
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.keap.core.sdk.model;

import java.util.Objects;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import com.keap.core.sdk.model.PaymentMethod;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListPaymentMethodsResponse
 */
@JsonPropertyOrder({
  ListPaymentMethodsResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN,
  ListPaymentMethodsResponse.JSON_PROPERTY_RECORDS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class ListPaymentMethodsResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public static final String JSON_PROPERTY_RECORDS = "records";
  @jakarta.annotation.Nullable  private List<@Valid PaymentMethod> records = new ArrayList<>();

  public ListPaymentMethodsResponse() { 
  }

  public ListPaymentMethodsResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
    return this;
  }

  /**
   * Get nextPageToken
   * @return nextPageToken
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getNextPageToken() {
    return nextPageToken;
  }


  @JsonProperty(JSON_PROPERTY_NEXT_PAGE_TOKEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
    this.nextPageToken = nextPageToken;
  }


  public ListPaymentMethodsResponse records(@jakarta.annotation.Nullable List<@Valid PaymentMethod> records) {
    this.records = records;
    return this;
  }

  public ListPaymentMethodsResponse addRecordsItem(PaymentMethod recordsItem) {
    if (this.records == null) {
      this.records = new ArrayList<>();
    }
    this.records.add(recordsItem);
    return this;
  }

  /**
   * Get records
   * @return records
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_RECORDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid PaymentMethod> getRecords() {
    return records;
  }


  @JsonProperty(JSON_PROPERTY_RECORDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRecords(@jakarta.annotation.Nullable List<@Valid PaymentMethod> records) {
    this.records = records;
  }

  /**
   * Return true if this ListPaymentMethodsResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListPaymentMethodsResponse listPaymentMethodsResponse = (ListPaymentMethodsResponse) o;
    return Objects.equals(this.nextPageToken, listPaymentMethodsResponse.nextPageToken) &&
        Objects.equals(this.records, listPaymentMethodsResponse.records);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextPageToken, records);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListPaymentMethodsResponse {\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
    sb.append("    records: ").append(toIndentedString(records)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

    public static class Builder {
    
        private ListPaymentMethodsResponse instance;
    
        public Builder() {
          this(new ListPaymentMethodsResponse());
        }
    
        protected Builder(ListPaymentMethodsResponse instance) {
          this.instance = instance;
        }
    
        public ListPaymentMethodsResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
            public ListPaymentMethodsResponse.Builder records(List<PaymentMethod> records) {
              this.instance.records = records;
          return this;
        }
        
    
        /**
        * returns a built ListPaymentMethodsResponse instance.
        *
        * The builder is not reusable.
        */
        public ListPaymentMethodsResponse build() {
          try {
            return this.instance;
          } finally {
            // ensure that this.instance is not reused
            this.instance = null;
          }
        }
    
        @Override
        public String toString() {
          return getClass() + "=(" + instance + ")";
        }
      }
    
      /**
      * Create a builder with no initialized field.
      */
      public static ListPaymentMethodsResponse.Builder builder() {
        return new ListPaymentMethodsResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListPaymentMethodsResponse.Builder toBuilder() {
        return new ListPaymentMethodsResponse.Builder()
          .nextPageToken(getNextPageToken())
          .records(getRecords());
      }
}

