import queryString from 'query-string';
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroesByName } from '../heroes/helpers';

export const useQuery = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search)
  
  const heroes = getHeroesByName(q);


  return {
    q,
    heroes,
    navigate,
    location
  }
}
