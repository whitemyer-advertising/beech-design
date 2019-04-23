import gql from 'graphql-tag';

const ALL_CATEGORIES = gql`
    query GetCategories {
        categories {
            id
            name
            headline
            description
        }
    }
`;

const SINGLE_PRODUCT = gql`
    query GetProduct($url: String!) {
        product(url: $url) {
            id
            name
            headline
            description
            blurb
            url
        }
    }
`;

const ALL_PRODUCTS = gql`
    query GetProducts {
        products {
            id
            name
            headline
            description
            blurb
            url
            bd_copy
            featured
            category_id
            category {
                name
            }
        }
    }
`;

const STACKER_SPECS = gql`
    query GetStackerSpecs($product: String!, $model: String!) {
        stackerSpecs(product: $product, model: $model) {
            id
            model
            product_id
            product
            model_no
            raised_height
            lowered_height
            load_center
            wheel_diam_front
            wheel_diam_rear
            machine_weight
            platform_length_a
            platform_length_b
            leg_id
            leg_od
            fork_length
            fork_od_min
            fork_od_max
            overall_width
            overall_length
            overall_height
        }
    }
`;

const CRANE_SPECS = gql`
    query GetCraneSpecs($product: String!, $model: String!) {
        craneSpecs(product: $product, model: $model) {
            id
            product_id
            product
            model_no
            model
            pump_type
            machine_weight
            boom_position
            hook_capacity
            hook_height_min
            hook_height_max
            dimension_a
            dimension_b
            dimension_c
            dimension_d
            dimension_oah
            useable_space
        }
    }
`;

const LIFT_TABLE_SPECS = gql`
    query GetLiftTableSpecs($product: String!, $model: String!) {
        liftTableSpecs(product: $product, model: $model) {
            id
            product_id
            product
            model_no
            model
            series
            platform
            capacity
            raise_time
            weight
            raised_height
            lowered_height
            overall_size
        }
    }
`;

export const Queries = {
    Categories: ALL_CATEGORIES,
    Product: SINGLE_PRODUCT,
    Products: ALL_PRODUCTS,
    StackerSpecs: STACKER_SPECS,
    CraneSpecs: CRANE_SPECS,
    LiftTableSpecs: LIFT_TABLE_SPECS
}