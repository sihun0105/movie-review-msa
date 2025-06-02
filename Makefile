generate_grpc_code:
	protoc -I./proto --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=nestJs=true:./proto ./proto/user.proto
	protoc -I./proto --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=nestJs=true:./proto ./proto/auth.proto
	protoc -I./proto --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=nestJs=true:./proto ./proto/reply.proto
	protoc -I./proto --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=nestJs=true:./proto ./proto/movie.proto
	protoc -I./proto --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=nestJs=true:./proto ./proto/common.proto
	protoc -I./proto --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=nestJs=true:./proto ./proto/recruit.proto
	protoc -I./proto --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=nestJs=true:./proto ./proto/article.proto
