import { estypesWithBody } from "@elastic/elasticsearch"

const gamesConfig: estypesWithBody.IndicesCreateRequest = {
  index: 'games',
  settings: {
    number_of_shards: 2,
    number_of_replicas: 1,
    index: {
      max_ngram_diff: 8
    },
    analysis: {
      filter: {
        autocomplete_filter: {
          type: 'ngram',
          min_gram: 3,
          max_gram: 8
        }
      },
      analyzer: {
        autocomplete: {
          type: 'custom',
          tokenizer: 'standard',
          filter: ['lowercase', 'autocomplete_filter']
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
      name: {
        type: 'text',
        analyzer: 'autocomplete',
        search_analyzer: 'standard'
      },
      price: {
        type: 'long',
        index: false
      },
      genre: {
        type: 'keyword'
      },
      tags: {
        type: 'keyword'
      },
      features: {
        type: 'keyword'
      }
    }
  }
}

export default gamesConfig
