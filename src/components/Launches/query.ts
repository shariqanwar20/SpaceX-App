import gql from "graphql-tag";

export const Launches = gql`
    query rocketLaunches {
		launches {
            flight_number
            mission_name
            launch_success
            launch_year
            details
        }
    }
`