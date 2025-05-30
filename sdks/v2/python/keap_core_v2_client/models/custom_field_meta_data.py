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

from pydantic import BaseModel, ConfigDict, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from keap_core_v2_client.models.custom_field_option import CustomFieldOption
from typing import Optional, Set
from typing_extensions import Self

class CustomFieldMetaData(BaseModel):
    """
    CustomFieldMetaData
    """ # noqa: E501
    default_value: Optional[StrictStr] = None
    field_name: Optional[StrictStr] = None
    field_type: Optional[StrictStr] = None
    group_id: Optional[StrictStr] = None
    id: Optional[StrictStr] = None
    label: Optional[StrictStr] = None
    options: Optional[List[CustomFieldOption]] = None
    record_type: Optional[StrictStr] = None
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["default_value", "field_name", "field_type", "group_id", "id", "label", "options", "record_type"]

    @field_validator('field_type')
    def field_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['CURRENCY', 'DATE', 'DATE_TIME', 'DAY_OF_WEEK', 'DECIMAL_NUMBER', 'DRILLDOWN', 'DROPDOWN', 'EMAIL', 'LIST_BOX', 'MONTH', 'NAME', 'PERCENT', 'PHONE_NUMBER', 'RADIO', 'SOCIAL_SECURITY_NUMBER', 'STATE', 'TEXT', 'TEXT_AREA', 'USER', 'USER_LIST_BOX', 'WEBSITE', 'WHOLE_NUMBER', 'YEAR', 'YES_NO']):
            raise ValueError("must be one of enum values ('CURRENCY', 'DATE', 'DATE_TIME', 'DAY_OF_WEEK', 'DECIMAL_NUMBER', 'DRILLDOWN', 'DROPDOWN', 'EMAIL', 'LIST_BOX', 'MONTH', 'NAME', 'PERCENT', 'PHONE_NUMBER', 'RADIO', 'SOCIAL_SECURITY_NUMBER', 'STATE', 'TEXT', 'TEXT_AREA', 'USER', 'USER_LIST_BOX', 'WEBSITE', 'WHOLE_NUMBER', 'YEAR', 'YES_NO')")
        return value

    @field_validator('record_type')
    def record_type_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['CONTACT', 'REFERRAL_PARTNER', 'OPPORTUNITY', 'TASK_NOTE_APPOINTMENT', 'COMPANY', 'ORDER', 'SUBSCRIPTION']):
            raise ValueError("must be one of enum values ('CONTACT', 'REFERRAL_PARTNER', 'OPPORTUNITY', 'TASK_NOTE_APPOINTMENT', 'COMPANY', 'ORDER', 'SUBSCRIPTION')")
        return value

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
        """Create an instance of CustomFieldMetaData from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in options (list)
        _items = []
        if self.options:
            for _item_options in self.options:
                if _item_options:
                    _items.append(_item_options.to_dict())
            _dict['options'] = _items
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of CustomFieldMetaData from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "default_value": obj.get("default_value"),
            "field_name": obj.get("field_name"),
            "field_type": obj.get("field_type"),
            "group_id": obj.get("group_id"),
            "id": obj.get("id"),
            "label": obj.get("label"),
            "options": [CustomFieldOption.from_dict(_item) for _item in obj["options"]] if obj.get("options") is not None else None,
            "record_type": obj.get("record_type")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


