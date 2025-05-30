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
 * Represents a monetary value with an amount and currency.
 */
@Schema(description = "Represents a monetary value with an amount and currency.")
@JsonPropertyOrder({
  Money.JSON_PROPERTY_AMOUNT,
  Money.JSON_PROPERTY_CURRENCY
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class Money implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AMOUNT = "amount";
  @jakarta.annotation.Nonnull  private Double amount;

  public static final String JSON_PROPERTY_CURRENCY = "currency";
  @jakarta.annotation.Nonnull  private String currency;

  public Money() { 
  }

  public Money amount(@jakarta.annotation.Nonnull Double amount) {
    this.amount = amount;
    return this;
  }

  /**
   * The amount of money. This field is required.
   * @return amount
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The amount of money. This field is required.")
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


  public Money currency(@jakarta.annotation.Nonnull String currency) {
    this.currency = currency;
    return this;
  }

  /**
   * The currency of the money. This field is required.
   * @return currency
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "The currency of the money. This field is required.")
  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public String getCurrency() {
    return currency;
  }


  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setCurrency(@jakarta.annotation.Nonnull String currency) {
    this.currency = currency;
  }

  /**
   * Return true if this Money object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Money money = (Money) o;
    return Objects.equals(this.amount, money.amount) &&
        Objects.equals(this.currency, money.currency);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amount, currency);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Money {\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
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
    
        private Money instance;
    
        public Builder() {
          this(new Money());
        }
    
        protected Builder(Money instance) {
          this.instance = instance;
        }
    
        public Money.Builder amount(Double amount) {
              this.instance.amount = amount;
          return this;
        }
            public Money.Builder currency(String currency) {
              this.instance.currency = currency;
          return this;
        }
        
    
        /**
        * returns a built Money instance.
        *
        * The builder is not reusable.
        */
        public Money build() {
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
      public static Money.Builder builder() {
        return new Money.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public Money.Builder toBuilder() {
        return new Money.Builder()
          .amount(getAmount())
          .currency(getCurrency());
      }
}

