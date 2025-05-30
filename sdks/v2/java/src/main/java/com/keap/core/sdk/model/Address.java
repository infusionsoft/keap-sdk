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
 * Address
 */
@JsonPropertyOrder({
  Address.JSON_PROPERTY_COUNTRY,
  Address.JSON_PROPERTY_COUNTRY_CODE,
  Address.JSON_PROPERTY_FIELD,
  Address.JSON_PROPERTY_LINE1,
  Address.JSON_PROPERTY_LINE2,
  Address.JSON_PROPERTY_LOCALITY,
  Address.JSON_PROPERTY_POSTAL_CODE,
  Address.JSON_PROPERTY_REGION,
  Address.JSON_PROPERTY_REGION_CODE,
  Address.JSON_PROPERTY_ZIP_CODE,
  Address.JSON_PROPERTY_ZIP_FOUR
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class Address implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_COUNTRY = "country";
  @jakarta.annotation.Nullable  private String country;

  public static final String JSON_PROPERTY_COUNTRY_CODE = "country_code";
  @jakarta.annotation.Nullable  private String countryCode;

  /**
   * Gets or Sets field
   */
  public enum FieldEnum {
    ADDRESS_FIELD_UNSPECIFIED(String.valueOf("ADDRESS_FIELD_UNSPECIFIED")),
    
    BILLING(String.valueOf("BILLING")),
    
    SHIPPING(String.valueOf("SHIPPING")),
    
    OTHER(String.valueOf("OTHER")),
    
    UNKNOWN_COULD_NOT_DESERIALIZE(String.valueOf("unknown_default_open_api"));

    private String value;

    FieldEnum(String value) {
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
    public static FieldEnum fromValue(String value) {
      for (FieldEnum b : FieldEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return UNKNOWN_COULD_NOT_DESERIALIZE;
    }
  }
  public static final String JSON_PROPERTY_FIELD = "field";
  @jakarta.annotation.Nullable  private FieldEnum field;

  public static final String JSON_PROPERTY_LINE1 = "line1";
  @jakarta.annotation.Nullable  private String line1;

  public static final String JSON_PROPERTY_LINE2 = "line2";
  @jakarta.annotation.Nullable  private String line2;

  public static final String JSON_PROPERTY_LOCALITY = "locality";
  @jakarta.annotation.Nullable  private String locality;

  public static final String JSON_PROPERTY_POSTAL_CODE = "postal_code";
  @jakarta.annotation.Nullable  private String postalCode;

  public static final String JSON_PROPERTY_REGION = "region";
  @jakarta.annotation.Nullable  private String region;

  public static final String JSON_PROPERTY_REGION_CODE = "region_code";
  @jakarta.annotation.Nullable  private String regionCode;

  public static final String JSON_PROPERTY_ZIP_CODE = "zip_code";
  @jakarta.annotation.Nullable  private String zipCode;

  public static final String JSON_PROPERTY_ZIP_FOUR = "zip_four";
  @jakarta.annotation.Nullable  private String zipFour;

  public Address() { 
  }

  public Address country(@jakarta.annotation.Nullable String country) {
    this.country = country;
    return this;
  }

  /**
   * The long-name descriptive version of the Country Code
   * @return country
   */
  @jakarta.annotation.Nullable  @Schema(example = "United States of America", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The long-name descriptive version of the Country Code")
  @JsonProperty(JSON_PROPERTY_COUNTRY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCountry() {
    return country;
  }


  @JsonProperty(JSON_PROPERTY_COUNTRY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCountry(@jakarta.annotation.Nullable String country) {
    this.country = country;
  }


  public Address countryCode(@jakarta.annotation.Nullable String countryCode) {
    this.countryCode = countryCode;
    return this;
  }

  /**
   * An ISO 3166-2 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
   * @return countryCode
   */
  @jakarta.annotation.Nullable  @Schema(example = "USA", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "An ISO 3166-2 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)")
  @JsonProperty(JSON_PROPERTY_COUNTRY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCountryCode() {
    return countryCode;
  }


  @JsonProperty(JSON_PROPERTY_COUNTRY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCountryCode(@jakarta.annotation.Nullable String countryCode) {
    this.countryCode = countryCode;
  }


  public Address field(@jakarta.annotation.Nullable FieldEnum field) {
    this.field = field;
    return this;
  }

  /**
   * Get field
   * @return field
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FIELD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public FieldEnum getField() {
    return field;
  }


  @JsonProperty(JSON_PROPERTY_FIELD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setField(@jakarta.annotation.Nullable FieldEnum field) {
    this.field = field;
  }


  public Address line1(@jakarta.annotation.Nullable String line1) {
    this.line1 = line1;
    return this;
  }

  /**
   * Get line1
   * @return line1
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LINE1)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLine1() {
    return line1;
  }


  @JsonProperty(JSON_PROPERTY_LINE1)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLine1(@jakarta.annotation.Nullable String line1) {
    this.line1 = line1;
  }


  public Address line2(@jakarta.annotation.Nullable String line2) {
    this.line2 = line2;
    return this;
  }

  /**
   * Get line2
   * @return line2
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LINE2)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLine2() {
    return line2;
  }


  @JsonProperty(JSON_PROPERTY_LINE2)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLine2(@jakarta.annotation.Nullable String line2) {
    this.line2 = line2;
  }


  public Address locality(@jakarta.annotation.Nullable String locality) {
    this.locality = locality;
    return this;
  }

  /**
   * The municipality to which the address belongs
   * @return locality
   */
  @jakarta.annotation.Nullable  @Schema(example = "Phoenix", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The municipality to which the address belongs")
  @JsonProperty(JSON_PROPERTY_LOCALITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLocality() {
    return locality;
  }


  @JsonProperty(JSON_PROPERTY_LOCALITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLocality(@jakarta.annotation.Nullable String locality) {
    this.locality = locality;
  }


  public Address postalCode(@jakarta.annotation.Nullable String postalCode) {
    this.postalCode = postalCode;
    return this;
  }

  /**
   * Get postalCode
   * @return postalCode
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_POSTAL_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPostalCode() {
    return postalCode;
  }


  @JsonProperty(JSON_PROPERTY_POSTAL_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPostalCode(@jakarta.annotation.Nullable String postalCode) {
    this.postalCode = postalCode;
  }


  public Address region(@jakarta.annotation.Nullable String region) {
    this.region = region;
    return this;
  }

  /**
   * The long-name descriptive version of the Region Code
   * @return region
   */
  @jakarta.annotation.Nullable  @Schema(example = "Arizona", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "The long-name descriptive version of the Region Code")
  @JsonProperty(JSON_PROPERTY_REGION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getRegion() {
    return region;
  }


  @JsonProperty(JSON_PROPERTY_REGION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRegion(@jakarta.annotation.Nullable String region) {
    this.region = region;
  }


  public Address regionCode(@jakarta.annotation.Nullable String regionCode) {
    this.regionCode = regionCode;
    return this;
  }

  /**
   * An ISO 3166-2 Province Code, such as one of the US States (https://en.wikipedia.org/wiki/ISO_3166-2:US)
   * @return regionCode
   */
  @jakarta.annotation.Nullable  @Schema(example = "US-AZ", requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "An ISO 3166-2 Province Code, such as one of the US States (https://en.wikipedia.org/wiki/ISO_3166-2:US)")
  @JsonProperty(JSON_PROPERTY_REGION_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getRegionCode() {
    return regionCode;
  }


  @JsonProperty(JSON_PROPERTY_REGION_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRegionCode(@jakarta.annotation.Nullable String regionCode) {
    this.regionCode = regionCode;
  }


  public Address zipCode(@jakarta.annotation.Nullable String zipCode) {
    this.zipCode = zipCode;
    return this;
  }

  /**
   * Get zipCode
   * @return zipCode
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ZIP_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getZipCode() {
    return zipCode;
  }


  @JsonProperty(JSON_PROPERTY_ZIP_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setZipCode(@jakarta.annotation.Nullable String zipCode) {
    this.zipCode = zipCode;
  }


  public Address zipFour(@jakarta.annotation.Nullable String zipFour) {
    this.zipFour = zipFour;
    return this;
  }

  /**
   * Get zipFour
   * @return zipFour
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ZIP_FOUR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getZipFour() {
    return zipFour;
  }


  @JsonProperty(JSON_PROPERTY_ZIP_FOUR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setZipFour(@jakarta.annotation.Nullable String zipFour) {
    this.zipFour = zipFour;
  }

  /**
   * Return true if this Address object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Address address = (Address) o;
    return Objects.equals(this.country, address.country) &&
        Objects.equals(this.countryCode, address.countryCode) &&
        Objects.equals(this.field, address.field) &&
        Objects.equals(this.line1, address.line1) &&
        Objects.equals(this.line2, address.line2) &&
        Objects.equals(this.locality, address.locality) &&
        Objects.equals(this.postalCode, address.postalCode) &&
        Objects.equals(this.region, address.region) &&
        Objects.equals(this.regionCode, address.regionCode) &&
        Objects.equals(this.zipCode, address.zipCode) &&
        Objects.equals(this.zipFour, address.zipFour);
  }

  @Override
  public int hashCode() {
    return Objects.hash(country, countryCode, field, line1, line2, locality, postalCode, region, regionCode, zipCode, zipFour);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Address {\n");
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
    sb.append("    countryCode: ").append(toIndentedString(countryCode)).append("\n");
    sb.append("    field: ").append(toIndentedString(field)).append("\n");
    sb.append("    line1: ").append(toIndentedString(line1)).append("\n");
    sb.append("    line2: ").append(toIndentedString(line2)).append("\n");
    sb.append("    locality: ").append(toIndentedString(locality)).append("\n");
    sb.append("    postalCode: ").append(toIndentedString(postalCode)).append("\n");
    sb.append("    region: ").append(toIndentedString(region)).append("\n");
    sb.append("    regionCode: ").append(toIndentedString(regionCode)).append("\n");
    sb.append("    zipCode: ").append(toIndentedString(zipCode)).append("\n");
    sb.append("    zipFour: ").append(toIndentedString(zipFour)).append("\n");
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
    
        private Address instance;
    
        public Builder() {
          this(new Address());
        }
    
        protected Builder(Address instance) {
          this.instance = instance;
        }
    
        public Address.Builder country(String country) {
              this.instance.country = country;
          return this;
        }
            public Address.Builder countryCode(String countryCode) {
              this.instance.countryCode = countryCode;
          return this;
        }
            public Address.Builder field(FieldEnum field) {
              this.instance.field = field;
          return this;
        }
            public Address.Builder line1(String line1) {
              this.instance.line1 = line1;
          return this;
        }
            public Address.Builder line2(String line2) {
              this.instance.line2 = line2;
          return this;
        }
            public Address.Builder locality(String locality) {
              this.instance.locality = locality;
          return this;
        }
            public Address.Builder postalCode(String postalCode) {
              this.instance.postalCode = postalCode;
          return this;
        }
            public Address.Builder region(String region) {
              this.instance.region = region;
          return this;
        }
            public Address.Builder regionCode(String regionCode) {
              this.instance.regionCode = regionCode;
          return this;
        }
            public Address.Builder zipCode(String zipCode) {
              this.instance.zipCode = zipCode;
          return this;
        }
            public Address.Builder zipFour(String zipFour) {
              this.instance.zipFour = zipFour;
          return this;
        }
        
    
        /**
        * returns a built Address instance.
        *
        * The builder is not reusable.
        */
        public Address build() {
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
      public static Address.Builder builder() {
        return new Address.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public Address.Builder toBuilder() {
        return new Address.Builder()
          .country(getCountry())
          .countryCode(getCountryCode())
          .field(getField())
          .line1(getLine1())
          .line2(getLine2())
          .locality(getLocality())
          .postalCode(getPostalCode())
          .region(getRegion())
          .regionCode(getRegionCode())
          .zipCode(getZipCode())
          .zipFour(getZipFour());
      }
}

