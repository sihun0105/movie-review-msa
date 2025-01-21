import { HfInference } from '@huggingface/inference';
import { Injectable } from '@nestjs/common';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

@Injectable()
export class UtilsService {
  private hf: HfInference;

  constructor() {
    this.hf = new HfInference(process.env.HF_API_KEY);
  }

  dateToTimestamp(date: Date): Timestamp {
    const timestamp = new Timestamp();
    timestamp.setSeconds(Math.floor(date.getTime() / 1000));
    timestamp.setNanos((date.getTime() % 1000) * 1000000);
    return timestamp;
  }
  async generateEmbedding(description: string): Promise<any> {
    const model = 'sentence-transformers/all-MiniLM-L6-v2';
    const embeddings = await this.hf.featureExtraction({
      model,
      inputs: description,
    });
    return embeddings;
  }
}
