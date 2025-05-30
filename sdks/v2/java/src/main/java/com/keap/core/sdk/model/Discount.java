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
 * Discount
 */
@JsonPropertyOrder({
  Discount.JSON_PROPERTY_AMOUNT,
  Discount.JSON_PROPERTY_DISCOUNT_METHOD,
  Discount.JSON_PROPERTY_LINE_ITEM_ID,
  Discount.JSON_PROPERTY_SPECIAL_ITEM_ID
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class Discount implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AMOUNT = "amount";
  @jakarta.annotation.Nonnull  private Double amount;

  /**
   * Gets or Sets discountMethod
   */
  public enum DiscountMethodEnum {
    AMOUNT(String.valueOf("AMOUNT")),
    
    PERCENT(String.valueOf("PERCENT")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    DiscountMethodEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static DiscountMethodEnum fromValue(String value) {
      for (DiscountMethodEnum b : DiscountMethodEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_DISCOUNT_METHOD = "discount_method";
  @jakarta.annotation.Nonnull  private DiscountMethodEnum discountMethod;

  public static final String JSON_PROPERTY_LINE_ITEM_ID = "line_item_id";
  @jakarta.annotation.Nullable  private String lineItemId;

  public static final String JSON_PROPERTY_SPECIAL_ITEM_ID = "special_item_id";
  @jakarta.annotation.Nonnull  private String specialItemId;

  public Discount() { 
  }

  public Discount amount(@jakarta.annotation.Nonnull Double amount) {
    this.amount = amount;
    return this;
  }

  /**
   * Get amount
   * @return amount
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Double getAmount() {
    return amount;
  }


  @JsonProperty(JSON_PROPERTY_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setAmount(@jakarta.annotation.Nonnull Double amount) {
    this.amount = amount;
  }


  public Discount discountMethod(@jakarta.annotation.Nonnull DiscountMethodEnum discountMethod) {
    this.discountMethod = discountMethod;
    return this;
  }

  /**
   * Get discountMethod
   * @return discountMethod
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_DISCOUNT_METHOD)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public DiscountMethodEnum getDiscountMethod() {
    return discountMethod;
  }


  @JsonProperty(JSON_PROPERTY_DISCOUNT_METHOD)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setDiscountMethod(@jakarta.annotation.Nonnull DiscountMethodEnum discountMethod) {
    this.discountMethod = discountMethod;
  }


  public Discount lineItemId(@jakarta.annotation.Nullable String lineItemId) {
    this.lineItemId = lineItemId;
    return this;
  }

  /**
   * Get lineItemId
   * @return lineItemId
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LINE_ITEM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLineItemId() {
    return lineItemId;
  }


  @JsonProperty(JSON_PROPERTY_LINE_ITEM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLineItemId(@jakarta.annotation.Nullable String lineItemId) {
    this.lineItemId = lineItemId;
  }


  public Discount specialItemId(@jakarta.annotation.Nonnull String specialItemId) {
    this.specialItemId = specialItemId;
    return this;
  }

  /**
   * Get specialItemId
   * @return specialItemId
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_SPECIAL_ITEM_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getSpecialItemId() {
    return specialItemId;
  }


  @JsonProperty(JSON_PROPERTY_SPECIAL_ITEM_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setSpecialItemId(@jakarta.annotation.Nonnull String specialItemId) {
    this.specialItemId = specialItemId;
  }

  /**
   * Return true if this Discount object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Discount discount = (Discount) o;
    return Objects.equals(this.amount, discount.amount) &&
        Objects.equals(this.discountMethod, discount.discountMethod) &&
        Objects.equals(this.lineItemId, discount.lineItemId) &&
        Objects.equals(this.specialItemId, discount.specialItemId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amount, discountMethod, lineItemId, specialItemId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Discount {\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    discountMethod: ").append(toIndentedString(discountMethod)).append("\n");
    sb.append("    lineItemId: ").append(toIndentedString(lineItemId)).append("\n");
    sb.append("    specialItemId: ").append(toIndentedString(specialItemId)).append("\n");
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
    
        private Discount instance;
    
        public Builder() {
          this(new Discount());
        }
    
        protected Builder(Discount instance) {
          this.instance = instance;
        }
    
        public Discount.Builder amount(Double amount) {
              this.instance.amount = amount;
          return this;
        }
            public Discount.Builder discountMethod(DiscountMethodEnum discountMethod) {
              this.instance.discountMethod = discountMethod;
          return this;
        }
            public Discount.Builder lineItemId(String lineItemId) {
              this.instance.lineItemId = lineItemId;
          return this;
        }
            public Discount.Builder specialItemId(String specialItemId) {
              this.instance.specialItemId = specialItemId;
          return this;
        }
        
    
        /**
        * returns a built Discount instance.
        *
        * The builder is not reusable.
        */
        public Discount build() {
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
      public static Discount.Builder builder() {
        return new Discount.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public Discount.Builder toBuilder() {
        return new Discount.Builder()
          .amount(getAmount())
          .discountMethod(getDiscountMethod())
          .lineItemId(getLineItemId())
          .specialItemId(getSpecialItemId());
      }
}

