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
import com.keap.core.sdk.model.ShippingDiscount;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListShippingDiscountsResponse
 */
@JsonPropertyOrder({
  ListShippingDiscountsResponse.JSON_PROPERTY_DISCOUNTS,
  ListShippingDiscountsResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class ListShippingDiscountsResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DISCOUNTS = "discounts";
  @jakarta.annotation.Nullable  private List<@Valid ShippingDiscount> discounts = new ArrayList<>();

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public ListShippingDiscountsResponse() { 
  }

  public ListShippingDiscountsResponse discounts(@jakarta.annotation.Nullable List<@Valid ShippingDiscount> discounts) {
    this.discounts = discounts;
    return this;
  }

  public ListShippingDiscountsResponse addDiscountsItem(ShippingDiscount discountsItem) {
    if (this.discounts == null) {
      this.discounts = new ArrayList<>();
    }
    this.discounts.add(discountsItem);
    return this;
  }

  /**
   * Get discounts
   * @return discounts
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DISCOUNTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid ShippingDiscount> getDiscounts() {
    return discounts;
  }


  @JsonProperty(JSON_PROPERTY_DISCOUNTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDiscounts(@jakarta.annotation.Nullable List<@Valid ShippingDiscount> discounts) {
    this.discounts = discounts;
  }


  public ListShippingDiscountsResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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

  /**
   * Return true if this ListShippingDiscountsResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListShippingDiscountsResponse listShippingDiscountsResponse = (ListShippingDiscountsResponse) o;
    return Objects.equals(this.discounts, listShippingDiscountsResponse.discounts) &&
        Objects.equals(this.nextPageToken, listShippingDiscountsResponse.nextPageToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(discounts, nextPageToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListShippingDiscountsResponse {\n");
    sb.append("    discounts: ").append(toIndentedString(discounts)).append("\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
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
    
        private ListShippingDiscountsResponse instance;
    
        public Builder() {
          this(new ListShippingDiscountsResponse());
        }
    
        protected Builder(ListShippingDiscountsResponse instance) {
          this.instance = instance;
        }
    
        public ListShippingDiscountsResponse.Builder discounts(List<ShippingDiscount> discounts) {
              this.instance.discounts = discounts;
          return this;
        }
            public ListShippingDiscountsResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
        
    
        /**
        * returns a built ListShippingDiscountsResponse instance.
        *
        * The builder is not reusable.
        */
        public ListShippingDiscountsResponse build() {
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
      public static ListShippingDiscountsResponse.Builder builder() {
        return new ListShippingDiscountsResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListShippingDiscountsResponse.Builder toBuilder() {
        return new ListShippingDiscountsResponse.Builder()
          .discounts(getDiscounts())
          .nextPageToken(getNextPageToken());
      }
}

