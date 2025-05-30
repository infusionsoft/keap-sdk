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
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Arrays;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * UpdateProductInterestRequest
 */
@JsonPropertyOrder({
  UpdateProductInterestRequest.JSON_PROPERTY_DISCOUNT_PERCENT,
  UpdateProductInterestRequest.JSON_PROPERTY_PRICE,
  UpdateProductInterestRequest.JSON_PROPERTY_QUANTITY
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class UpdateProductInterestRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DISCOUNT_PERCENT = "discount_percent";
  @jakarta.annotation.Nullable  private Integer discountPercent;

  public static final String JSON_PROPERTY_PRICE = "price";
  @jakarta.annotation.Nullable  private Double price;

  public static final String JSON_PROPERTY_QUANTITY = "quantity";
  @jakarta.annotation.Nullable  private Integer quantity;

  public UpdateProductInterestRequest() { 
  }

  public UpdateProductInterestRequest discountPercent(@jakarta.annotation.Nullable Integer discountPercent) {
    this.discountPercent = discountPercent;
    return this;
  }

  /**
   * Get discountPercent
   * @return discountPercent
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DISCOUNT_PERCENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getDiscountPercent() {
    return discountPercent;
  }


  @JsonProperty(JSON_PROPERTY_DISCOUNT_PERCENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDiscountPercent(@jakarta.annotation.Nullable Integer discountPercent) {
    this.discountPercent = discountPercent;
  }


  public UpdateProductInterestRequest price(@jakarta.annotation.Nullable Double price) {
    this.price = price;
    return this;
  }

  /**
   * Get price
   * @return price
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Double getPrice() {
    return price;
  }


  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPrice(@jakarta.annotation.Nullable Double price) {
    this.price = price;
  }


  public UpdateProductInterestRequest quantity(@jakarta.annotation.Nullable Integer quantity) {
    this.quantity = quantity;
    return this;
  }

  /**
   * Get quantity
   * @return quantity
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_QUANTITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer getQuantity() {
    return quantity;
  }


  @JsonProperty(JSON_PROPERTY_QUANTITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setQuantity(@jakarta.annotation.Nullable Integer quantity) {
    this.quantity = quantity;
  }

  /**
   * Return true if this UpdateProductInterestRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateProductInterestRequest updateProductInterestRequest = (UpdateProductInterestRequest) o;
    return Objects.equals(this.discountPercent, updateProductInterestRequest.discountPercent) &&
        Objects.equals(this.price, updateProductInterestRequest.price) &&
        Objects.equals(this.quantity, updateProductInterestRequest.quantity);
  }

  @Override
  public int hashCode() {
    return Objects.hash(discountPercent, price, quantity);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateProductInterestRequest {\n");
    sb.append("    discountPercent: ").append(toIndentedString(discountPercent)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
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
    
        private UpdateProductInterestRequest instance;
    
        public Builder() {
          this(new UpdateProductInterestRequest());
        }
    
        protected Builder(UpdateProductInterestRequest instance) {
          this.instance = instance;
        }
    
        public UpdateProductInterestRequest.Builder discountPercent(Integer discountPercent) {
              this.instance.discountPercent = discountPercent;
          return this;
        }
            public UpdateProductInterestRequest.Builder price(Double price) {
              this.instance.price = price;
          return this;
        }
            public UpdateProductInterestRequest.Builder quantity(Integer quantity) {
              this.instance.quantity = quantity;
          return this;
        }
        
    
        /**
        * returns a built UpdateProductInterestRequest instance.
        *
        * The builder is not reusable.
        */
        public UpdateProductInterestRequest build() {
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
      public static UpdateProductInterestRequest.Builder builder() {
        return new UpdateProductInterestRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateProductInterestRequest.Builder toBuilder() {
        return new UpdateProductInterestRequest.Builder()
          .discountPercent(getDiscountPercent())
          .price(getPrice())
          .quantity(getQuantity());
      }
}

