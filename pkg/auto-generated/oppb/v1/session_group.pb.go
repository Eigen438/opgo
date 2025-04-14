// MIT License
//
// Copyright (c) 2025 Eigen
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        (unknown)
// source: oppb/v1/session_group.proto

package oppb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
	unsafe "unsafe"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type SessionGroupAttribute struct {
	state                           protoimpl.MessageState `protogen:"open.v1"`
	AuthorizeSessionLifetimeSeconds int64                  `protobuf:"varint,1,opt,name=authorize_session_lifetime_seconds,proto3" json:"authorize_session_lifetime_seconds,omitempty"`
	unknownFields                   protoimpl.UnknownFields
	sizeCache                       protoimpl.SizeCache
}

func (x *SessionGroupAttribute) Reset() {
	*x = SessionGroupAttribute{}
	mi := &file_oppb_v1_session_group_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SessionGroupAttribute) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SessionGroupAttribute) ProtoMessage() {}

func (x *SessionGroupAttribute) ProtoReflect() protoreflect.Message {
	mi := &file_oppb_v1_session_group_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SessionGroupAttribute.ProtoReflect.Descriptor instead.
func (*SessionGroupAttribute) Descriptor() ([]byte, []int) {
	return file_oppb_v1_session_group_proto_rawDescGZIP(), []int{0}
}

func (x *SessionGroupAttribute) GetAuthorizeSessionLifetimeSeconds() int64 {
	if x != nil {
		return x.AuthorizeSessionLifetimeSeconds
	}
	return 0
}

type SessionGroup struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Key           *CommonKey             `protobuf:"bytes,1,opt,name=key,proto3" json:"key,omitempty"`
	Issuer        *CommonKey             `protobuf:"bytes,2,opt,name=issuer,proto3" json:"issuer,omitempty"`
	Attribute     *SessionGroupAttribute `protobuf:"bytes,3,opt,name=attribute,proto3" json:"attribute,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *SessionGroup) Reset() {
	*x = SessionGroup{}
	mi := &file_oppb_v1_session_group_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SessionGroup) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SessionGroup) ProtoMessage() {}

func (x *SessionGroup) ProtoReflect() protoreflect.Message {
	mi := &file_oppb_v1_session_group_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SessionGroup.ProtoReflect.Descriptor instead.
func (*SessionGroup) Descriptor() ([]byte, []int) {
	return file_oppb_v1_session_group_proto_rawDescGZIP(), []int{1}
}

func (x *SessionGroup) GetKey() *CommonKey {
	if x != nil {
		return x.Key
	}
	return nil
}

func (x *SessionGroup) GetIssuer() *CommonKey {
	if x != nil {
		return x.Issuer
	}
	return nil
}

func (x *SessionGroup) GetAttribute() *SessionGroupAttribute {
	if x != nil {
		return x.Attribute
	}
	return nil
}

var File_oppb_v1_session_group_proto protoreflect.FileDescriptor

const file_oppb_v1_session_group_proto_rawDesc = "" +
	"\n" +
	"\x1boppb/v1/session_group.proto\x12\aoppb.v1\x1a\x14oppb/v1/common.proto\"g\n" +
	"\x15SessionGroupAttribute\x12N\n" +
	"\"authorize_session_lifetime_seconds\x18\x01 \x01(\x03R\"authorize_session_lifetime_seconds\"\x9e\x01\n" +
	"\fSessionGroup\x12$\n" +
	"\x03key\x18\x01 \x01(\v2\x12.oppb.v1.CommonKeyR\x03key\x12*\n" +
	"\x06issuer\x18\x02 \x01(\v2\x12.oppb.v1.CommonKeyR\x06issuer\x12<\n" +
	"\tattribute\x18\x03 \x01(\v2\x1e.oppb.v1.SessionGroupAttributeR\tattributeB\x97\x01\n" +
	"\vcom.oppb.v1B\x11SessionGroupProtoP\x01Z8github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1;oppb\xa2\x02\x03OXX\xaa\x02\aOppb.V1\xca\x02\aOppb\\V1\xe2\x02\x13Oppb\\V1\\GPBMetadata\xea\x02\bOppb::V1b\x06proto3"

var (
	file_oppb_v1_session_group_proto_rawDescOnce sync.Once
	file_oppb_v1_session_group_proto_rawDescData []byte
)

func file_oppb_v1_session_group_proto_rawDescGZIP() []byte {
	file_oppb_v1_session_group_proto_rawDescOnce.Do(func() {
		file_oppb_v1_session_group_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_oppb_v1_session_group_proto_rawDesc), len(file_oppb_v1_session_group_proto_rawDesc)))
	})
	return file_oppb_v1_session_group_proto_rawDescData
}

var file_oppb_v1_session_group_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_oppb_v1_session_group_proto_goTypes = []any{
	(*SessionGroupAttribute)(nil), // 0: oppb.v1.SessionGroupAttribute
	(*SessionGroup)(nil),          // 1: oppb.v1.SessionGroup
	(*CommonKey)(nil),             // 2: oppb.v1.CommonKey
}
var file_oppb_v1_session_group_proto_depIdxs = []int32{
	2, // 0: oppb.v1.SessionGroup.key:type_name -> oppb.v1.CommonKey
	2, // 1: oppb.v1.SessionGroup.issuer:type_name -> oppb.v1.CommonKey
	0, // 2: oppb.v1.SessionGroup.attribute:type_name -> oppb.v1.SessionGroupAttribute
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_oppb_v1_session_group_proto_init() }
func file_oppb_v1_session_group_proto_init() {
	if File_oppb_v1_session_group_proto != nil {
		return
	}
	file_oppb_v1_common_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_oppb_v1_session_group_proto_rawDesc), len(file_oppb_v1_session_group_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_oppb_v1_session_group_proto_goTypes,
		DependencyIndexes: file_oppb_v1_session_group_proto_depIdxs,
		MessageInfos:      file_oppb_v1_session_group_proto_msgTypes,
	}.Build()
	File_oppb_v1_session_group_proto = out.File
	file_oppb_v1_session_group_proto_goTypes = nil
	file_oppb_v1_session_group_proto_depIdxs = nil
}
