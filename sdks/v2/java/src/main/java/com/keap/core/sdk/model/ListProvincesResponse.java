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
import com.keap.core.sdk.model.Provinces;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * ListProvincesResponse
 */
@JsonPropertyOrder({
  ListProvincesResponse.JSON_PROPERTY_NEXT_PAGE_TOKEN,
  ListProvincesResponse.JSON_PROPERTY_PROVINCES
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class ListProvincesResponse implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NEXT_PAGE_TOKEN = "next_page_token";
  @jakarta.annotation.Nullable  private String nextPageToken;

  public static final String JSON_PROPERTY_PROVINCES = "provinces";
  @jakarta.annotation.Nonnull  private List<@Valid Provinces> provinces = new ArrayList<>();

  public ListProvincesResponse() { 
  }

  public ListProvincesResponse nextPageToken(@jakarta.annotation.Nullable String nextPageToken) {
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


  public ListProvincesResponse provinces(@jakarta.annotation.Nonnull List<@Valid Provinces> provinces) {
    this.provinces = provinces;
    return this;
  }

  public ListProvincesResponse addProvincesItem(Provinces provincesItem) {
    if (this.provinces == null) {
      this.provinces = new ArrayList<>();
    }
    this.provinces.add(provincesItem);
    return this;
  }

  /**
   * A key-value pair of province code and province name.
   * @return provinces
   */
  @jakarta.annotation.Nonnull  @NotNull
  @Valid
  @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "A key-value pair of province code and province name.")
  @JsonProperty(JSON_PROPERTY_PROVINCES)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public List<@Valid Provinces> getProvinces() {
    return provinces;
  }


  @JsonProperty(JSON_PROPERTY_PROVINCES)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setProvinces(@jakarta.annotation.Nonnull List<@Valid Provinces> provinces) {
    this.provinces = provinces;
  }

  /**
   * Return true if this ListProvincesResponse object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListProvincesResponse listProvincesResponse = (ListProvincesResponse) o;
    return Objects.equals(this.nextPageToken, listProvincesResponse.nextPageToken) &&
        Objects.equals(this.provinces, listProvincesResponse.provinces);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextPageToken, provinces);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListProvincesResponse {\n");
    sb.append("    nextPageToken: ").append(toIndentedString(nextPageToken)).append("\n");
    sb.append("    provinces: ").append(toIndentedString(provinces)).append("\n");
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
    
        private ListProvincesResponse instance;
    
        public Builder() {
          this(new ListProvincesResponse());
        }
    
        protected Builder(ListProvincesResponse instance) {
          this.instance = instance;
        }
    
        public ListProvincesResponse.Builder nextPageToken(String nextPageToken) {
              this.instance.nextPageToken = nextPageToken;
          return this;
        }
            public ListProvincesResponse.Builder provinces(List<Provinces> provinces) {
              this.instance.provinces = provinces;
          return this;
        }
        
    
        /**
        * returns a built ListProvincesResponse instance.
        *
        * The builder is not reusable.
        */
        public ListProvincesResponse build() {
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
      public static ListProvincesResponse.Builder builder() {
        return new ListProvincesResponse.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public ListProvincesResponse.Builder toBuilder() {
        return new ListProvincesResponse.Builder()
          .nextPageToken(getNextPageToken())
          .provinces(getProvinces());
      }
}

