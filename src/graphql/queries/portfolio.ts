import { gql } from 'graphql-request'

const query = gql`
	query portfolio {
		allSkills(orderBy: createdAt_ASC) {
			id
			title
			icon {
				url
				alt
			}
		}

		allProjects {
			id
			description
			title
			tech
			repository
			livesite
		}

		about {
			description
		}
	}
`
export default query
