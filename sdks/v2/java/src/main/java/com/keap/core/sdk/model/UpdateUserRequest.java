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
import com.keap.core.sdk.model.Address;
import com.keap.core.sdk.model.EmailAddressRequest;
import com.keap.core.sdk.model.FaxNumber;
import com.keap.core.sdk.model.PhoneNumber;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.*;
import jakarta.validation.Valid;


/**
 * UpdateUserRequest
 */
@JsonPropertyOrder({
  UpdateUserRequest.JSON_PROPERTY_ADDRESS,
  UpdateUserRequest.JSON_PROPERTY_COMPANY_NAME,
  UpdateUserRequest.JSON_PROPERTY_EMAIL_ADDRESS,
  UpdateUserRequest.JSON_PROPERTY_FAMILY_NAME,
  UpdateUserRequest.JSON_PROPERTY_FAX_NUMBERS,
  UpdateUserRequest.JSON_PROPERTY_GIVEN_NAME,
  UpdateUserRequest.JSON_PROPERTY_PHONE_NUMBERS,
  UpdateUserRequest.JSON_PROPERTY_TIME_ZONE,
  UpdateUserRequest.JSON_PROPERTY_TITLE,
  UpdateUserRequest.JSON_PROPERTY_WEBSITE
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", comments = "Generator version: 7.13.0")
public class UpdateUserRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ADDRESS = "address";
  @jakarta.annotation.Nullable  private Address address;

  public static final String JSON_PROPERTY_COMPANY_NAME = "company_name";
  @jakarta.annotation.Nullable  private String companyName;

  public static final String JSON_PROPERTY_EMAIL_ADDRESS = "email_address";
  @jakarta.annotation.Nullable  private EmailAddressRequest emailAddress;

  public static final String JSON_PROPERTY_FAMILY_NAME = "family_name";
  @jakarta.annotation.Nullable  private String familyName;

  public static final String JSON_PROPERTY_FAX_NUMBERS = "fax_numbers";
  @jakarta.annotation.Nullable  private List<@Valid FaxNumber> faxNumbers = new ArrayList<>();

  public static final String JSON_PROPERTY_GIVEN_NAME = "given_name";
  @jakarta.annotation.Nullable  private String givenName;

  public static final String JSON_PROPERTY_PHONE_NUMBERS = "phone_numbers";
  @jakarta.annotation.Nullable  private List<@Valid PhoneNumber> phoneNumbers = new ArrayList<>();

  public static final String JSON_PROPERTY_TIME_ZONE = "time_zone";
  @jakarta.annotation.Nullable  private String timeZone;

  public static final String JSON_PROPERTY_TITLE = "title";
  @jakarta.annotation.Nullable  private String title;

  public static final String JSON_PROPERTY_WEBSITE = "website";
  @jakarta.annotation.Nullable  private String website;

  public UpdateUserRequest() { 
  }

  public UpdateUserRequest address(@jakarta.annotation.Nullable Address address) {
    this.address = address;
    return this;
  }

  /**
   * Get address
   * @return address
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public Address getAddress() {
    return address;
  }


  @JsonProperty(JSON_PROPERTY_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAddress(@jakarta.annotation.Nullable Address address) {
    this.address = address;
  }


  public UpdateUserRequest companyName(@jakarta.annotation.Nullable String companyName) {
    this.companyName = companyName;
    return this;
  }

  /**
   * Get companyName
   * @return companyName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_COMPANY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getCompanyName() {
    return companyName;
  }


  @JsonProperty(JSON_PROPERTY_COMPANY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCompanyName(@jakarta.annotation.Nullable String companyName) {
    this.companyName = companyName;
  }


  public UpdateUserRequest emailAddress(@jakarta.annotation.Nullable EmailAddressRequest emailAddress) {
    this.emailAddress = emailAddress;
    return this;
  }

  /**
   * Get emailAddress
   * @return emailAddress
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_EMAIL_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public EmailAddressRequest getEmailAddress() {
    return emailAddress;
  }


  @JsonProperty(JSON_PROPERTY_EMAIL_ADDRESS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEmailAddress(@jakarta.annotation.Nullable EmailAddressRequest emailAddress) {
    this.emailAddress = emailAddress;
  }


  public UpdateUserRequest familyName(@jakarta.annotation.Nullable String familyName) {
    this.familyName = familyName;
    return this;
  }

  /**
   * Get familyName
   * @return familyName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FAMILY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getFamilyName() {
    return familyName;
  }


  @JsonProperty(JSON_PROPERTY_FAMILY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFamilyName(@jakarta.annotation.Nullable String familyName) {
    this.familyName = familyName;
  }


  public UpdateUserRequest faxNumbers(@jakarta.annotation.Nullable List<@Valid FaxNumber> faxNumbers) {
    this.faxNumbers = faxNumbers;
    return this;
  }

  public UpdateUserRequest addFaxNumbersItem(FaxNumber faxNumbersItem) {
    if (this.faxNumbers == null) {
      this.faxNumbers = new ArrayList<>();
    }
    this.faxNumbers.add(faxNumbersItem);
    return this;
  }

  /**
   * Get faxNumbers
   * @return faxNumbers
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_FAX_NUMBERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid FaxNumber> getFaxNumbers() {
    return faxNumbers;
  }


  @JsonProperty(JSON_PROPERTY_FAX_NUMBERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFaxNumbers(@jakarta.annotation.Nullable List<@Valid FaxNumber> faxNumbers) {
    this.faxNumbers = faxNumbers;
  }


  public UpdateUserRequest givenName(@jakarta.annotation.Nullable String givenName) {
    this.givenName = givenName;
    return this;
  }

  /**
   * Get givenName
   * @return givenName
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_GIVEN_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getGivenName() {
    return givenName;
  }


  @JsonProperty(JSON_PROPERTY_GIVEN_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setGivenName(@jakarta.annotation.Nullable String givenName) {
    this.givenName = givenName;
  }


  public UpdateUserRequest phoneNumbers(@jakarta.annotation.Nullable List<@Valid PhoneNumber> phoneNumbers) {
    this.phoneNumbers = phoneNumbers;
    return this;
  }

  public UpdateUserRequest addPhoneNumbersItem(PhoneNumber phoneNumbersItem) {
    if (this.phoneNumbers == null) {
      this.phoneNumbers = new ArrayList<>();
    }
    this.phoneNumbers.add(phoneNumbersItem);
    return this;
  }

  /**
   * Get phoneNumbers
   * @return phoneNumbers
   */
  @jakarta.annotation.Nullable  @Valid
  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_PHONE_NUMBERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public List<@Valid PhoneNumber> getPhoneNumbers() {
    return phoneNumbers;
  }


  @JsonProperty(JSON_PROPERTY_PHONE_NUMBERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPhoneNumbers(@jakarta.annotation.Nullable List<@Valid PhoneNumber> phoneNumbers) {
    this.phoneNumbers = phoneNumbers;
  }


  public UpdateUserRequest timeZone(@jakarta.annotation.Nullable String timeZone) {
    this.timeZone = timeZone;
    return this;
  }

  /**
   * Get timeZone
   * @return timeZone
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TIME_ZONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getTimeZone() {
    return timeZone;
  }


  @JsonProperty(JSON_PROPERTY_TIME_ZONE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTimeZone(@jakarta.annotation.Nullable String timeZone) {
    this.timeZone = timeZone;
  }


  public UpdateUserRequest title(@jakarta.annotation.Nullable String title) {
    this.title = title;
    return this;
  }

  /**
   * Get title
   * @return title
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getTitle() {
    return title;
  }


  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTitle(@jakarta.annotation.Nullable String title) {
    this.title = title;
  }


  public UpdateUserRequest website(@jakarta.annotation.Nullable String website) {
    this.website = website;
    return this;
  }

  /**
   * Get website
   * @return website
   */
  @jakarta.annotation.Nullable  @Schema(requiredMode = Schema.RequiredMode.NOT_REQUIRED, description = "")
  @JsonProperty(JSON_PROPERTY_WEBSITE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public String getWebsite() {
    return website;
  }


  @JsonProperty(JSON_PROPERTY_WEBSITE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setWebsite(@jakarta.annotation.Nullable String website) {
    this.website = website;
  }

  /**
   * Return true if this UpdateUserRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateUserRequest updateUserRequest = (UpdateUserRequest) o;
    return Objects.equals(this.address, updateUserRequest.address) &&
        Objects.equals(this.companyName, updateUserRequest.companyName) &&
        Objects.equals(this.emailAddress, updateUserRequest.emailAddress) &&
        Objects.equals(this.familyName, updateUserRequest.familyName) &&
        Objects.equals(this.faxNumbers, updateUserRequest.faxNumbers) &&
        Objects.equals(this.givenName, updateUserRequest.givenName) &&
        Objects.equals(this.phoneNumbers, updateUserRequest.phoneNumbers) &&
        Objects.equals(this.timeZone, updateUserRequest.timeZone) &&
        Objects.equals(this.title, updateUserRequest.title) &&
        Objects.equals(this.website, updateUserRequest.website);
  }

  @Override
  public int hashCode() {
    return Objects.hash(address, companyName, emailAddress, familyName, faxNumbers, givenName, phoneNumbers, timeZone, title, website);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateUserRequest {\n");
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    companyName: ").append(toIndentedString(companyName)).append("\n");
    sb.append("    emailAddress: ").append(toIndentedString(emailAddress)).append("\n");
    sb.append("    familyName: ").append(toIndentedString(familyName)).append("\n");
    sb.append("    faxNumbers: ").append(toIndentedString(faxNumbers)).append("\n");
    sb.append("    givenName: ").append(toIndentedString(givenName)).append("\n");
    sb.append("    phoneNumbers: ").append(toIndentedString(phoneNumbers)).append("\n");
    sb.append("    timeZone: ").append(toIndentedString(timeZone)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    website: ").append(toIndentedString(website)).append("\n");
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
    
        private UpdateUserRequest instance;
    
        public Builder() {
          this(new UpdateUserRequest());
        }
    
        protected Builder(UpdateUserRequest instance) {
          this.instance = instance;
        }
    
        public UpdateUserRequest.Builder address(Address address) {
              this.instance.address = address;
          return this;
        }
            public UpdateUserRequest.Builder companyName(String companyName) {
              this.instance.companyName = companyName;
          return this;
        }
            public UpdateUserRequest.Builder emailAddress(EmailAddressRequest emailAddress) {
              this.instance.emailAddress = emailAddress;
          return this;
        }
            public UpdateUserRequest.Builder familyName(String familyName) {
              this.instance.familyName = familyName;
          return this;
        }
            public UpdateUserRequest.Builder faxNumbers(List<FaxNumber> faxNumbers) {
              this.instance.faxNumbers = faxNumbers;
          return this;
        }
            public UpdateUserRequest.Builder givenName(String givenName) {
              this.instance.givenName = givenName;
          return this;
        }
            public UpdateUserRequest.Builder phoneNumbers(List<PhoneNumber> phoneNumbers) {
              this.instance.phoneNumbers = phoneNumbers;
          return this;
        }
            public UpdateUserRequest.Builder timeZone(String timeZone) {
              this.instance.timeZone = timeZone;
          return this;
        }
            public UpdateUserRequest.Builder title(String title) {
              this.instance.title = title;
          return this;
        }
            public UpdateUserRequest.Builder website(String website) {
              this.instance.website = website;
          return this;
        }
        
    
        /**
        * returns a built UpdateUserRequest instance.
        *
        * The builder is not reusable.
        */
        public UpdateUserRequest build() {
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
      public static UpdateUserRequest.Builder builder() {
        return new UpdateUserRequest.Builder();
      }
    
      /**
      * Create a builder with a shallow copy of this instance.
      */
      public UpdateUserRequest.Builder toBuilder() {
        return new UpdateUserRequest.Builder()
          .address(getAddress())
          .companyName(getCompanyName())
          .emailAddress(getEmailAddress())
          .familyName(getFamilyName())
          .faxNumbers(getFaxNumbers())
          .givenName(getGivenName())
          .phoneNumbers(getPhoneNumbers())
          .timeZone(getTimeZone())
          .title(getTitle())
          .website(getWebsite());
      }
}

