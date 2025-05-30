# coding: utf-8

"""
    Keap REST API

    Keap REST Core Service

    The version of the OpenAPI document: 2.70.0.812056
    Contact: api@keap.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from keap_core_v2_client.models.address import Address
from keap_core_v2_client.models.custom_field_value import CustomFieldValue
from keap_core_v2_client.models.email_address import EmailAddress
from keap_core_v2_client.models.fax_number import FaxNumber
from keap_core_v2_client.models.phone_number import PhoneNumber
from typing import Optional, Set
from typing_extensions import Self

class CreateCompanyRequest(BaseModel):
    """
    CreateCompanyRequest
    """ # noqa: E501
    address: Optional[Address] = None
    company_name: StrictStr
    custom_fields: Optional[List[CustomFieldValue]] = None
    email_address: Optional[EmailAddress] = None
    fax_number: Optional[FaxNumber] = None
    notes: Optional[StrictStr] = None
    phone_number: Optional[PhoneNumber] = None
    website: Optional[StrictStr] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["address", "company_name", "custom_fields", "email_address", "fax_number", "notes", "phone_number", "website"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of CreateCompanyRequest from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        * Fields in `self.additional_properties` are added to the output dict.
        """
        excluded_fields: Set[str] = set([
            "additional_properties",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of address
        if self.address:
            _dict['address'] = self.address.to_dict()
        # override the default output from pydantic by calling `to_dict()` of each item in custom_fields (list)
        _items = []
        if self.custom_fields:
            for _item_custom_fields in self.custom_fields:
                if _item_custom_fields:
                    _items.append(_item_custom_fields.to_dict())
            _dict['custom_fields'] = _items
        # override the default output from pydantic by calling `to_dict()` of email_address
        if self.email_address:
            _dict['email_address'] = self.email_address.to_dict()
        # override the default output from pydantic by calling `to_dict()` of fax_number
        if self.fax_number:
            _dict['fax_number'] = self.fax_number.to_dict()
        # override the default output from pydantic by calling `to_dict()` of phone_number
        if self.phone_number:
            _dict['phone_number'] = self.phone_number.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of CreateCompanyRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "address": Address.from_dict(obj["address"]) if obj.get("address") is not None else None,
            "company_name": obj.get("company_name"),
            "custom_fields": [CustomFieldValue.from_dict(_item) for _item in obj["custom_fields"]] if obj.get("custom_fields") is not None else None,
            "email_address": EmailAddress.from_dict(obj["email_address"]) if obj.get("email_address") is not None else None,
            "fax_number": FaxNumber.from_dict(obj["fax_number"]) if obj.get("fax_number") is not None else None,
            "notes": obj.get("notes"),
            "phone_number": PhoneNumber.from_dict(obj["phone_number"]) if obj.get("phone_number") is not None else None,
            "website": obj.get("website")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


