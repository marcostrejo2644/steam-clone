import { estypesWithBody } from '@elastic/elasticsearch'

const usersConfig: estypesWithBody.IndicesCreateRequest = {
  index: 'users',
  settings: {
    number_of_shards: 2,
    number_of_replicas: 1,
    index: {
      max_ngram_diff: 19
    },
    analysis: {
      tokenizer: {
        email_tokenizer: {
          type: 'uax_url_email',
          max_token_length: 5
        }
      },
      filter: {
        autocomplete_filter: {
          type: 'ngram',
          min_gram: 3,
          max_gram: 20
        }
      },
      analyzer: {
        autocomplete: {
          type: 'custom',
          tokenizer: 'standard',
          filter: ['lowercase', 'autocomplete_filter']
        },
        full_text_analyzer: {
          type: 'custom',
          tokenizer: 'standard',
          filter: ['lowercase', 'classic']
        },
        email_analyzer: {
          type: 'custom',
          tokenizer: 'email_tokenizer'
        }
      }
    }
  },
  mappings: {
    properties: {
      id: {
        type: 'text',
        index: true
      },
      username: {
        type: 'text',
        analyzer: 'autocomplete',
        search_analyzer: 'standard'
      },
      email: {
        type: 'text',
        analyzer: 'email_analyzer'
      }
    }
  }
}

export default usersConfig
