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
 * HistoricalCounts
 */
@JsonPropertyOrder({
  HistoricalCounts.JSON_PROPERTY_24HOURS,
  HistoricalCounts.JSON_PROPERTY_30DAYS
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class HistoricalCounts implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_24HOURS = "24_hours";
  @jakarta.annotation.Nullable  private Integer _24hours;

  public static final String JSON_PROPERTY_30DAYS = "30_days";
  @jakarta.annotation.Nullable  private Integer _30days;

  public HistoricalCounts() { 
  }

  public HistoricalCounts _24hours(@jakarta.annotation.Nullable Integer _24hours) {
    this._24hours = _24hours;
    return this;
  }

  /**
   * Get _24hours
   * @return _24hours
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_24HOURS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer get24hours() {
    return _24hours;
  }


  @JsonProperty(JSON_PROPERTY_24HOURS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void set24hours(@jakarta.annotation.Nullable Integer _24hours) {
    this._24hours = _24hours;
  }


  public HistoricalCounts _30days(@jakarta.annotation.Nullable Integer _30days) {
    this._30days = _30days;
    return this;
  }

  /**
   * Get _30days
   * @return _30days
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_30DAYS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Integer get30days() {
    return _30days;
  }


  @JsonProperty(JSON_PROPERTY_30DAYS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void set30days(@jakarta.annotation.Nullable Integer _30days) {
    this._30days = _30days;
  }

  /**
   * Return true if this HistoricalCounts object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    HistoricalCounts historicalCounts = (HistoricalCounts) o;
    return Objects.equals(this._24hours, historicalCounts._24hours) &&
        Objects.equals(this._30days, historicalCounts._30days);
  }

  @Override
  public int hashCode() {
    return Objects.hash(_24hours, _30days);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class HistoricalCounts {\n");
    sb.append("    _24hours: ").append(toIndentedString(_24hours)).append("\n");
    sb.append("    _30days: ").append(toIndentedString(_30days)).append("\n");
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
    
        private HistoricalCounts instance;
    
        public Builder() {
          this(new HistoricalCounts());
        }
    
        protected Builder(HistoricalCounts instance) {
          this.instance = instance;
        }
    
        public HistoricalCounts.Builder _24hours(Integer _24hours) {
              this.instance._24hours = _24hours;
          return this;
        }
            public HistoricalCounts.Builder _30days(Integer _30days) {
              this.instance._30days = _30days;
          return this;
        }
        
    
        /**
        * returns a built HistoricalCounts instance.
        *
        * The builder is not reusable.
        */
        public HistoricalCounts build() {
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
      public static HistoricalCounts.Builder builder() {
        return new HistoricalCounts.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public HistoricalCounts.Builder toBuilder() {
        return new HistoricalCounts.Builder()
          ._24hours(get24hours())
          ._30days(get30days());
      }
}

