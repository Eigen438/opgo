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
// source: oppb/v1/common.proto

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

type CommonKey struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Id            string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *CommonKey) Reset() {
	*x = CommonKey{}
	mi := &file_oppb_v1_common_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *CommonKey) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CommonKey) ProtoMessage() {}

func (x *CommonKey) ProtoReflect() protoreflect.Message {
	mi := &file_oppb_v1_common_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CommonKey.ProtoReflect.Descriptor instead.
func (*CommonKey) Descriptor() ([]byte, []int) {
	return file_oppb_v1_common_proto_rawDescGZIP(), []int{0}
}

func (x *CommonKey) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

var File_oppb_v1_common_proto protoreflect.FileDescriptor

const file_oppb_v1_common_proto_rawDesc = "" +
	"\n" +
	"\x14oppb/v1/common.proto\x12\aoppb.v1\"\x1b\n" +
	"\tCommonKey\x12\x0e\n" +
	"\x02id\x18\x01 \x01(\tR\x02idB\x91\x01\n" +
	"\vcom.oppb.v1B\vCommonProtoP\x01Z8github.com/Eigen438/opgo/pkg/auto-generated/oppb/v1;oppb\xa2\x02\x03OXX\xaa\x02\aOppb.V1\xca\x02\aOppb\\V1\xe2\x02\x13Oppb\\V1\\GPBMetadata\xea\x02\bOppb::V1b\x06proto3"

var (
	file_oppb_v1_common_proto_rawDescOnce sync.Once
	file_oppb_v1_common_proto_rawDescData []byte
)

func file_oppb_v1_common_proto_rawDescGZIP() []byte {
	file_oppb_v1_common_proto_rawDescOnce.Do(func() {
		file_oppb_v1_common_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_oppb_v1_common_proto_rawDesc), len(file_oppb_v1_common_proto_rawDesc)))
	})
	return file_oppb_v1_common_proto_rawDescData
}

var file_oppb_v1_common_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_oppb_v1_common_proto_goTypes = []any{
	(*CommonKey)(nil), // 0: oppb.v1.CommonKey
}
var file_oppb_v1_common_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_oppb_v1_common_proto_init() }
func file_oppb_v1_common_proto_init() {
	if File_oppb_v1_common_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_oppb_v1_common_proto_rawDesc), len(file_oppb_v1_common_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_oppb_v1_common_proto_goTypes,
		DependencyIndexes: file_oppb_v1_common_proto_depIdxs,
		MessageInfos:      file_oppb_v1_common_proto_msgTypes,
	}.Build()
	File_oppb_v1_common_proto = out.File
	file_oppb_v1_common_proto_goTypes = nil
	file_oppb_v1_common_proto_depIdxs = nil
}
