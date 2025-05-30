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
 * UpdateProductCommissionProgramRequest
 */
@JsonPropertyOrder({
  UpdateProductCommissionProgramRequest.JSON_PROPERTY_DOLLAR_AMOUNT,
  UpdateProductCommissionProgramRequest.JSON_PROPERTY_PERCENTAGE,
  UpdateProductCommissionProgramRequest.JSON_PROPERTY_PRODUCT_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class UpdateProductCommissionProgramRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DOLLAR_AMOUNT = "dollar_amount";
  @jakarta.annotation.Nullable  private String dollarAmount;

  public static final String JSON_PROPERTY_PERCENTAGE = "percentage";
  @jakarta.annotation.Nullable  private String percentage;

  public static final String JSON_PROPERTY_PRODUCT_ID = "product_id";
  @jakarta.annotation.Nullable  private String productId;

  public UpdateProductCommissionProgramRequest() { 
  }

  public UpdateProductCommissionProgramRequest dollarAmount(@jakarta.annotation.Nullable String dollarAmount) {
    this.dollarAmount = dollarAmount;
    return this;
  }

  /**
   * Get dollarAmount
   * @return dollarAmount
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DOLLAR_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getDollarAmount() {
    return dollarAmount;
  }


  @JsonProperty(JSON_PROPERTY_DOLLAR_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDollarAmount(@jakarta.annotation.Nullable String dollarAmount) {
    this.dollarAmount = dollarAmount;
  }


  public UpdateProductCommissionProgramRequest percentage(@jakarta.annotation.Nullable String percentage) {
    this.percentage = percentage;
    return this;
  }

  /**
   * Get percentage
   * @return percentage
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PERCENTAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPercentage() {
    return percentage;
  }


  @JsonProperty(JSON_PROPERTY_PERCENTAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPercentage(@jakarta.annotation.Nullable String percentage) {
    this.percentage = percentage;
  }


  public UpdateProductCommissionProgramRequest productId(@jakarta.annotation.Nullable String productId) {
    this.productId = productId;
    return this;
  }

  /**
   * Get productId
   * @return productId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getProductId() {
    return productId;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProductId(@jakarta.annotation.Nullable String productId) {
    this.productId = productId;
  }

  /**
   * Return true if this UpdateProductCommissionProgramRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateProductCommissionProgramRequest updateProductCommissionProgramRequest = (UpdateProductCommissionProgramRequest) o;
    return Objects.equals(this.dollarAmount, updateProductCommissionProgramRequest.dollarAmount) &&
        Objects.equals(this.percentage, updateProductCommissionProgramRequest.percentage) &&
        Objects.equals(this.productId, updateProductCommissionProgramRequest.productId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(dollarAmount, percentage, productId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateProductCommissionProgramRequest {\n");
    sb.append("    dollarAmount: ").append(toIndentedString(dollarAmount)).append("\n");
    sb.append("    percentage: ").append(toIndentedString(percentage)).append("\n");
    sb.append("    productId: ").append(toIndentedString(productId)).append("\n");
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
    
        private UpdateProductCommissionProgramRequest instance;
    
        public Builder() {
          this(new UpdateProductCommissionProgramRequest());
        }
    
        protected Builder(UpdateProductCommissionProgramRequest instance) {
          this.instance = instance;
        }
    
        public UpdateProductCommissionProgramRequest.Builder dollarAmount(String dollarAmount) {
              this.instance.dollarAmount = dollarAmount;
          return this;
        }
            public UpdateProductCommissionProgramRequest.Builder percentage(String percentage) {
              this.instance.percentage = percentage;
          return this;
        }
            public UpdateProductCommissionProgramRequest.Builder productId(String productId) {
              this.instance.productId = productId;
          return this;
        }
        
    
        /**
        * returns a built UpdateProductCommissionProgramRequest instance.
        *
        * The builder is not reusable.
        */
        public UpdateProductCommissionProgramRequest build() {
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
      public static UpdateProductCommissionProgramRequest.Builder builder() {
        return new UpdateProductCommissionProgramRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateProductCommissionProgramRequest.Builder toBuilder() {
        return new UpdateProductCommissionProgramRequest.Builder()
          .dollarAmount(getDollarAmount())
          .percentage(getPercentage())
          .productId(getProductId());
      }
}

