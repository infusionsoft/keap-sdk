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
 * AddressInformation
 */
@JsonPropertyOrder({
  AddressInformation.JSON_PROPERTY_COMPANY,
  AddressInformation.JSON_PROPERTY_COUNTRY_CODE,
  AddressInformation.JSON_PROPERTY_FIRST_NAME,
  AddressInformation.JSON_PROPERTY_IS_INVOICE_TO_COMPANY,
  AddressInformation.JSON_PROPERTY_LAST_NAME,
  AddressInformation.JSON_PROPERTY_LINE1,
  AddressInformation.JSON_PROPERTY_LINE2,
  AddressInformation.JSON_PROPERTY_LOCALITY,
  AddressInformation.JSON_PROPERTY_MIDDLE_NAME,
  AddressInformation.JSON_PROPERTY_PHONE,
  AddressInformation.JSON_PROPERTY_REGION,
  AddressInformation.JSON_PROPERTY_ZIP_CODE,
  AddressInformation.JSON_PROPERTY_ZIP_FOUR
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class AddressInformation implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_COMPANY = "company";
  @jakarta.annotation.Nullable  private String company;

  public static final String JSON_PROPERTY_COUNTRY_CODE = "country_code";
  @jakarta.annotation.Nullable  private String countryCode;

  public static final String JSON_PROPERTY_FIRST_NAME = "first_name";
  @jakarta.annotation.Nullable  private String firstName;

  public static final String JSON_PROPERTY_IS_INVOICE_TO_COMPANY = "is_invoice_to_company";
  @jakarta.annotation.Nullable  private Boolean isInvoiceToCompany;

  public static final String JSON_PROPERTY_LAST_NAME = "last_name";
  @jakarta.annotation.Nullable  private String lastName;

  public static final String JSON_PROPERTY_LINE1 = "line1";
  @jakarta.annotation.Nullable  private String line1;

  public static final String JSON_PROPERTY_LINE2 = "line2";
  @jakarta.annotation.Nullable  private String line2;

  public static final String JSON_PROPERTY_LOCALITY = "locality";
  @jakarta.annotation.Nullable  private String locality;

  public static final String JSON_PROPERTY_MIDDLE_NAME = "middle_name";
  @jakarta.annotation.Nullable  private String middleName;

  public static final String JSON_PROPERTY_PHONE = "phone";
  @jakarta.annotation.Nullable  private String phone;

  public static final String JSON_PROPERTY_REGION = "region";
  @jakarta.annotation.Nullable  private String region;

  public static final String JSON_PROPERTY_ZIP_CODE = "zip_code";
  @jakarta.annotation.Nullable  private String zipCode;

  public static final String JSON_PROPERTY_ZIP_FOUR = "zip_four";
  @jakarta.annotation.Nullable  private String zipFour;

  public AddressInformation() { 
  }

  public AddressInformation company(@jakarta.annotation.Nullable String company) {
    this.company = company;
    return this;
  }

  /**
   * Get company
   * @return company
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COMPANY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCompany() {
    return company;
  }


  @JsonProperty(JSON_PROPERTY_COMPANY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCompany(@jakarta.annotation.Nullable String company) {
    this.company = company;
  }


  public AddressInformation countryCode(@jakarta.annotation.Nullable String countryCode) {
    this.countryCode = countryCode;
    return this;
  }

  /**
   * Get countryCode
   * @return countryCode
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public AddressInformation firstName(@jakarta.annotation.Nullable String firstName) {
    this.firstName = firstName;
    return this;
  }

  /**
   * Get firstName
   * @return firstName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FIRST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getFirstName() {
    return firstName;
  }


  @JsonProperty(JSON_PROPERTY_FIRST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFirstName(@jakarta.annotation.Nullable String firstName) {
    this.firstName = firstName;
  }


  public AddressInformation isInvoiceToCompany(@jakarta.annotation.Nullable Boolean isInvoiceToCompany) {
    this.isInvoiceToCompany = isInvoiceToCompany;
    return this;
  }

  /**
   * Get isInvoiceToCompany
   * @return isInvoiceToCompany
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_IS_INVOICE_TO_COMPANY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Boolean getIsInvoiceToCompany() {
    return isInvoiceToCompany;
  }


  @JsonProperty(JSON_PROPERTY_IS_INVOICE_TO_COMPANY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsInvoiceToCompany(@jakarta.annotation.Nullable Boolean isInvoiceToCompany) {
    this.isInvoiceToCompany = isInvoiceToCompany;
  }


  public AddressInformation lastName(@jakarta.annotation.Nullable String lastName) {
    this.lastName = lastName;
    return this;
  }

  /**
   * Get lastName
   * @return lastName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_LAST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getLastName() {
    return lastName;
  }


  @JsonProperty(JSON_PROPERTY_LAST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLastName(@jakarta.annotation.Nullable String lastName) {
    this.lastName = lastName;
  }


  public AddressInformation line1(@jakarta.annotation.Nullable String line1) {
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


  public AddressInformation line2(@jakarta.annotation.Nullable String line2) {
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


  public AddressInformation locality(@jakarta.annotation.Nullable String locality) {
    this.locality = locality;
    return this;
  }

  /**
   * Get locality
   * @return locality
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public AddressInformation middleName(@jakarta.annotation.Nullable String middleName) {
    this.middleName = middleName;
    return this;
  }

  /**
   * Get middleName
   * @return middleName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_MIDDLE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getMiddleName() {
    return middleName;
  }


  @JsonProperty(JSON_PROPERTY_MIDDLE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMiddleName(@jakarta.annotation.Nullable String middleName) {
    this.middleName = middleName;
  }


  public AddressInformation phone(@jakarta.annotation.Nullable String phone) {
    this.phone = phone;
    return this;
  }

  /**
   * Get phone
   * @return phone
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PHONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getPhone() {
    return phone;
  }


  @JsonProperty(JSON_PROPERTY_PHONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPhone(@jakarta.annotation.Nullable String phone) {
    this.phone = phone;
  }


  public AddressInformation region(@jakarta.annotation.Nullable String region) {
    this.region = region;
    return this;
  }

  /**
   * Get region
   * @return region
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
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


  public AddressInformation zipCode(@jakarta.annotation.Nullable String zipCode) {
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


  public AddressInformation zipFour(@jakarta.annotation.Nullable String zipFour) {
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
   * Return true if this AddressInformation object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AddressInformation addressInformation = (AddressInformation) o;
    return Objects.equals(this.company, addressInformation.company) &&
        Objects.equals(this.countryCode, addressInformation.countryCode) &&
        Objects.equals(this.firstName, addressInformation.firstName) &&
        Objects.equals(this.isInvoiceToCompany, addressInformation.isInvoiceToCompany) &&
        Objects.equals(this.lastName, addressInformation.lastName) &&
        Objects.equals(this.line1, addressInformation.line1) &&
        Objects.equals(this.line2, addressInformation.line2) &&
        Objects.equals(this.locality, addressInformation.locality) &&
        Objects.equals(this.middleName, addressInformation.middleName) &&
        Objects.equals(this.phone, addressInformation.phone) &&
        Objects.equals(this.region, addressInformation.region) &&
        Objects.equals(this.zipCode, addressInformation.zipCode) &&
        Objects.equals(this.zipFour, addressInformation.zipFour);
  }

  @Override
  public int hashCode() {
    return Objects.hash(company, countryCode, firstName, isInvoiceToCompany, lastName, line1, line2, locality, middleName, phone, region, zipCode, zipFour);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AddressInformation {\n");
    sb.append("    company: ").append(toIndentedString(company)).append("\n");
    sb.append("    countryCode: ").append(toIndentedString(countryCode)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    isInvoiceToCompany: ").append(toIndentedString(isInvoiceToCompany)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
    sb.append("    line1: ").append(toIndentedString(line1)).append("\n");
    sb.append("    line2: ").append(toIndentedString(line2)).append("\n");
    sb.append("    locality: ").append(toIndentedString(locality)).append("\n");
    sb.append("    middleName: ").append(toIndentedString(middleName)).append("\n");
    sb.append("    phone: ").append(toIndentedString(phone)).append("\n");
    sb.append("    region: ").append(toIndentedString(region)).append("\n");
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
    
        private AddressInformation instance;
    
        public Builder() {
          this(new AddressInformation());
        }
    
        protected Builder(AddressInformation instance) {
          this.instance = instance;
        }
    
        public AddressInformation.Builder company(String company) {
              this.instance.company = company;
          return this;
        }
            public AddressInformation.Builder countryCode(String countryCode) {
              this.instance.countryCode = countryCode;
          return this;
        }
            public AddressInformation.Builder firstName(String firstName) {
              this.instance.firstName = firstName;
          return this;
        }
            public AddressInformation.Builder isInvoiceToCompany(Boolean isInvoiceToCompany) {
              this.instance.isInvoiceToCompany = isInvoiceToCompany;
          return this;
        }
            public AddressInformation.Builder lastName(String lastName) {
              this.instance.lastName = lastName;
          return this;
        }
            public AddressInformation.Builder line1(String line1) {
              this.instance.line1 = line1;
          return this;
        }
            public AddressInformation.Builder line2(String line2) {
              this.instance.line2 = line2;
          return this;
        }
            public AddressInformation.Builder locality(String locality) {
              this.instance.locality = locality;
          return this;
        }
            public AddressInformation.Builder middleName(String middleName) {
              this.instance.middleName = middleName;
          return this;
        }
            public AddressInformation.Builder phone(String phone) {
              this.instance.phone = phone;
          return this;
        }
            public AddressInformation.Builder region(String region) {
              this.instance.region = region;
          return this;
        }
            public AddressInformation.Builder zipCode(String zipCode) {
              this.instance.zipCode = zipCode;
          return this;
        }
            public AddressInformation.Builder zipFour(String zipFour) {
              this.instance.zipFour = zipFour;
          return this;
        }
        
    
        /**
        * returns a built AddressInformation instance.
        *
        * The builder is not reusable.
        */
        public AddressInformation build() {
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
      public static AddressInformation.Builder builder() {
        return new AddressInformation.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public AddressInformation.Builder toBuilder() {
        return new AddressInformation.Builder()
          .company(getCompany())
          .countryCode(getCountryCode())
          .firstName(getFirstName())
          .isInvoiceToCompany(getIsInvoiceToCompany())
          .lastName(getLastName())
          .line1(getLine1())
          .line2(getLine2())
          .locality(getLocality())
          .middleName(getMiddleName())
          .phone(getPhone())
          .region(getRegion())
          .zipCode(getZipCode())
          .zipFour(getZipFour());
      }
}

