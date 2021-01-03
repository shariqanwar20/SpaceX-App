import gql from 'graphql-tag'

export const Launch = gql`
    query launchProfile($id: String!) {
        launch(id: $id) {
            flight_number
            launch_success
            details
            mission_name
            launch_year
            upcoming
            links {
                article_link
                video_link
                wikipedia
            }
        }
    }
`