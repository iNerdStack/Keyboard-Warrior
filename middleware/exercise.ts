import { gameLevels } from '@/types';

export default defineNuxtRouteMiddleware((to, from) => {
   //validate level query parameter
  if (!to.query.level || !(to.query.level.toString() in gameLevels)) {
    //if level is not passed in url query, route back to homepage
    return navigateTo('/');
  }
});
