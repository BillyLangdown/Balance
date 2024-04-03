/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDish = /* GraphQL */ `
  query GetDish($id: ID!) {
    getDish(id: $id) {
      id
      name
      image
      description
      price
      restaurantID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDishes = /* GraphQL */ `
  query ListDishes(
    $filter: ModelDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const dishesByRestaurantID = /* GraphQL */ `
  query DishesByRestaurantID(
    $restaurantID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dishesByRestaurantID(
      restaurantID: $restaurantID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
      id
      name
      image
      deliveryFee
      minDeliverytime
      maxDeliveryTime
      rating
      address
      lat
      long
      Dishes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        deliveryFee
        minDeliverytime
        maxDeliveryTime
        rating
        address
        lat
        long
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
