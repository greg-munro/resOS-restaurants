var require = meteorInstall({"imports":{"api":{"RestaurantsCollection.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// imports/api/RestaurantsCollection.js                                                                          //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.export({
  RestaurantsCollection: () => RestaurantsCollection
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }
}, 0);
const RestaurantsCollection = new Mongo.Collection('restaurants');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// server/main.js                                                                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }
}, 0);
let RestaurantsCollection;
module.link("../imports/api/RestaurantsCollection", {
  RestaurantsCollection(v) {
    RestaurantsCollection = v;
  }
}, 1);
Meteor.startup(() => {
  RestaurantsCollection.remove({});
  const restaurantsData = [{
    name: 'Bodega Picarol',
    address: 'Carrer de Valencia 224',
    tags: ['Spanish', 'Mediterranean'],
    creation_date: '10/01/2023',
    opening_hours: ['12:00 - 16:00', '18:30 - 23:00'],
    image: 'https://www.equinoxmagazine.fr/wp-content/uploads/2023/04/bodega-picarol.jpg'
  }, {
    name: 'Sushi Palace',
    address: '123 Main St',
    tags: ['Japanese', 'Sushi'],
    creation_date: '15/02/2023',
    opening_hours: ['11:30 - 14:30', '20:00 - 23:00'],
    image: 'https://www.aluxurytravelblog.com/wp-content/uploads/2018/01/I-kibana.jpg'
  }, {
    name: 'Cake Fiesta',
    address: '789 Oak Blvd',
    tags: ['Ice Cream', 'Dessert'],
    creation_date: '20/02/2023',
    opening_hours: ['09:00 - 16:00'],
    image: 'https://hips.hearstapps.com/hmg-prod/images/screen-shot-2020-12-07-at-11-15-41-am-1607358551.png'
  }, {
    name: 'Pasta Paradise',
    address: '456 Pasta Lane',
    tags: ['Italian', 'Pizza'],
    creation_date: '25/02/2023',
    opening_hours: ['20:00 - 23:45'],
    image: 'https://assets.suitcasemag.com/images/hero_mobile/125575-pasta-table-spread.jpg'
  }, {
    name: 'Robata',
    address: '555 Burger Street',
    tags: ['Japanese', 'Sushi'],
    creation_date: '05/04/2023',
    opening_hours: ['10:00 - 21:30'],
    image: 'https://media.cntraveller.com/photos/611bf2328c1b7286f1c12024/16:9/w_2992,h_1683,c_limit/sumi-interiors-1-jun21-pr.jpg'
  }, {
    name: 'Bodega Quimet',
    address: 'Carrer de Enric Granados 180',
    tags: ['Spanish', 'Mediterranean'],
    creation_date: '10/01/2023',
    opening_hours: ['11:00 -16:00', '18:00 - 23:00'],
    image: 'https://www.totbarcelona.cat/app/uploads/sites/11/2023/03/bodega-quimet.jpg'
  }, {
    name: 'Jai',
    address: '108 Turner Lane',
    tags: ['Japanese', 'Sushi'],
    creation_date: '05/04/2023',
    opening_hours: ['11:00 - 23:30'],
    image: 'https://d267qvt8mf7rfa.cloudfront.net/restaurant/256/mainImage.jpg'
  }, {
    name: 'Pepes',
    address: '155 Turner Lane',
    tags: ['Italian', 'Pizza'],
    creation_date: '05/04/2023',
    opening_hours: ['11:00 - 23:30'],
    image: 'https://assets.bonappetit.com/photos/5ca680eff7c9b51309c95d26/16:9/w_2560%2Cc_limit/luigis-2.jpg'
  }, {
    name: 'Jumbo Palace',
    address: '18 Horn Street',
    tags: ['Ice Cream', 'Dessert'],
    creation_date: '20/02/2023',
    opening_hours: ['17:00 - 23:00'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORKNZnq5_n9NoScr6XW9EznRFvesBmFSVpg&usqp=CAU'
  }];
  restaurantsData.forEach(restaurant => {
    RestaurantsCollection.insert(restaurant);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".ts",
    ".mjs",
    ".jsx"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvUmVzdGF1cmFudHNDb2xsZWN0aW9uLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnQiLCJSZXN0YXVyYW50c0NvbGxlY3Rpb24iLCJNb25nbyIsImxpbmsiLCJ2IiwiQ29sbGVjdGlvbiIsIk1ldGVvciIsInN0YXJ0dXAiLCJyZW1vdmUiLCJyZXN0YXVyYW50c0RhdGEiLCJuYW1lIiwiYWRkcmVzcyIsInRhZ3MiLCJjcmVhdGlvbl9kYXRlIiwib3BlbmluZ19ob3VycyIsImltYWdlIiwiZm9yRWFjaCIsInJlc3RhdXJhbnQiLCJpbnNlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDO0VBQUNDLHFCQUFxQixFQUFDQSxDQUFBLEtBQUlBO0FBQXFCLENBQUMsQ0FBQztBQUFDLElBQUlDLEtBQUs7QUFBQ0gsTUFBTSxDQUFDSSxJQUFJLENBQUMsY0FBYyxFQUFDO0VBQUNELEtBQUtBLENBQUNFLENBQUMsRUFBQztJQUFDRixLQUFLLEdBQUNFLENBQUM7RUFBQTtBQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFFckgsTUFBTUgscUJBQXFCLEdBQUcsSUFBSUMsS0FBSyxDQUFDRyxVQUFVLENBQUMsYUFBYSxDQUFDLEM7Ozs7Ozs7Ozs7O0FDRnhFLElBQUlDLE1BQU07QUFBQ1AsTUFBTSxDQUFDSSxJQUFJLENBQUMsZUFBZSxFQUFDO0VBQUNHLE1BQU1BLENBQUNGLENBQUMsRUFBQztJQUFDRSxNQUFNLEdBQUNGLENBQUM7RUFBQTtBQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFBQyxJQUFJSCxxQkFBcUI7QUFBQ0YsTUFBTSxDQUFDSSxJQUFJLENBQUMsc0NBQXNDLEVBQUM7RUFBQ0YscUJBQXFCQSxDQUFDRyxDQUFDLEVBQUM7SUFBQ0gscUJBQXFCLEdBQUNHLENBQUM7RUFBQTtBQUFDLENBQUMs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QztBQUNKLENBQUMsQ0FBQyxDIiwiZmlsZSI6Ii9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5cbmV4cG9ydCBjb25zdCBSZXN0YXVyYW50c0NvbGxlY3Rpb24gPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigncmVzdGF1cmFudHMnKTsiLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJ1xuaW1wb3J0IHsgUmVzdGF1cmFudHNDb2xsZWN0aW9uIH0gZnJvbSAnLi4vaW1wb3J0cy9hcGkvUmVzdGF1cmFudHNDb2xsZWN0aW9uJ1xuXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG4gIFJlc3RhdXJhbnRzQ29sbGVjdGlvbi5yZW1vdmUoe30pXG5cbiAgY29uc3QgcmVzdGF1cmFudHNEYXRhID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdCb2RlZ2EgUGljYXJvbCcsXG4gICAgICBhZGRyZXNzOiAnQ2FycmVyIGRlIFZhbGVuY2lhIDIyNCcsXG4gICAgICB0YWdzOiBbJ1NwYW5pc2gnLCAnTWVkaXRlcnJhbmVhbiddLFxuICAgICAgY3JlYXRpb25fZGF0ZTogJzEwLzAxLzIwMjMnLFxuICAgICAgb3BlbmluZ19ob3VyczogWycxMjowMCAtIDE2OjAwJywgJzE4OjMwIC0gMjM6MDAnXSxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly93d3cuZXF1aW5veG1hZ2F6aW5lLmZyL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIzLzA0L2JvZGVnYS1waWNhcm9sLmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdTdXNoaSBQYWxhY2UnLFxuICAgICAgYWRkcmVzczogJzEyMyBNYWluIFN0JyxcbiAgICAgIHRhZ3M6IFsnSmFwYW5lc2UnLCAnU3VzaGknXSxcbiAgICAgIGNyZWF0aW9uX2RhdGU6ICcxNS8wMi8yMDIzJyxcbiAgICAgIG9wZW5pbmdfaG91cnM6IFsnMTE6MzAgLSAxNDozMCcsICcyMDowMCAtIDIzOjAwJ10sXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vd3d3LmFsdXh1cnl0cmF2ZWxibG9nLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS9JLWtpYmFuYS5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2FrZSBGaWVzdGEnLFxuICAgICAgYWRkcmVzczogJzc4OSBPYWsgQmx2ZCcsXG4gICAgICB0YWdzOiBbJ0ljZSBDcmVhbScsICdEZXNzZXJ0J10sXG4gICAgICBjcmVhdGlvbl9kYXRlOiAnMjAvMDIvMjAyMycsXG4gICAgICBvcGVuaW5nX2hvdXJzOiBbJzA5OjAwIC0gMTY6MDAnXSxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9oaXBzLmhlYXJzdGFwcHMuY29tL2htZy1wcm9kL2ltYWdlcy9zY3JlZW4tc2hvdC0yMDIwLTEyLTA3LWF0LTExLTE1LTQxLWFtLTE2MDczNTg1NTEucG5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1Bhc3RhIFBhcmFkaXNlJyxcbiAgICAgIGFkZHJlc3M6ICc0NTYgUGFzdGEgTGFuZScsXG4gICAgICB0YWdzOiBbJ0l0YWxpYW4nLCAnUGl6emEnXSxcbiAgICAgIGNyZWF0aW9uX2RhdGU6ICcyNS8wMi8yMDIzJyxcbiAgICAgIG9wZW5pbmdfaG91cnM6IFsnMjA6MDAgLSAyMzo0NSddLFxuICAgICAgaW1hZ2U6ICdodHRwczovL2Fzc2V0cy5zdWl0Y2FzZW1hZy5jb20vaW1hZ2VzL2hlcm9fbW9iaWxlLzEyNTU3NS1wYXN0YS10YWJsZS1zcHJlYWQuanBnJ1xuICAgIH0sICBcbiAgICB7XG4gICAgICBuYW1lOiAnUm9iYXRhJyxcbiAgICAgIGFkZHJlc3M6ICc1NTUgQnVyZ2VyIFN0cmVldCcsXG4gICAgICB0YWdzOiBbJ0phcGFuZXNlJywgJ1N1c2hpJ10sXG4gICAgICBjcmVhdGlvbl9kYXRlOiAnMDUvMDQvMjAyMycsXG4gICAgICBvcGVuaW5nX2hvdXJzOiBbJzEwOjAwIC0gMjE6MzAnXSxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9tZWRpYS5jbnRyYXZlbGxlci5jb20vcGhvdG9zLzYxMWJmMjMyOGMxYjcyODZmMWMxMjAyNC8xNjo5L3dfMjk5MixoXzE2ODMsY19saW1pdC9zdW1pLWludGVyaW9ycy0xLWp1bjIxLXByLmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdCb2RlZ2EgUXVpbWV0JyxcbiAgICAgIGFkZHJlc3M6ICdDYXJyZXIgZGUgRW5yaWMgR3JhbmFkb3MgMTgwJyxcbiAgICAgIHRhZ3M6IFsnU3BhbmlzaCcsICdNZWRpdGVycmFuZWFuJ10sXG4gICAgICBjcmVhdGlvbl9kYXRlOiAnMTAvMDEvMjAyMycsXG4gICAgICBvcGVuaW5nX2hvdXJzOiBbJzExOjAwIC0xNjowMCcsICcxODowMCAtIDIzOjAwJ10sXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vd3d3LnRvdGJhcmNlbG9uYS5jYXQvYXBwL3VwbG9hZHMvc2l0ZXMvMTEvMjAyMy8wMy9ib2RlZ2EtcXVpbWV0LmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdKYWknLFxuICAgICAgYWRkcmVzczogJzEwOCBUdXJuZXIgTGFuZScsXG4gICAgICB0YWdzOiBbJ0phcGFuZXNlJywgJ1N1c2hpJ10sXG4gICAgICBjcmVhdGlvbl9kYXRlOiAnMDUvMDQvMjAyMycsXG4gICAgICBvcGVuaW5nX2hvdXJzOiBbJzExOjAwIC0gMjM6MzAnXSxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9kMjY3cXZ0OG1mN3JmYS5jbG91ZGZyb250Lm5ldC9yZXN0YXVyYW50LzI1Ni9tYWluSW1hZ2UuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1BlcGVzJyxcbiAgICAgIGFkZHJlc3M6ICcxNTUgVHVybmVyIExhbmUnLFxuICAgICAgdGFnczogWydJdGFsaWFuJywgJ1BpenphJ10sXG4gICAgICBjcmVhdGlvbl9kYXRlOiAnMDUvMDQvMjAyMycsXG4gICAgICBvcGVuaW5nX2hvdXJzOiBbJzExOjAwIC0gMjM6MzAnXSxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9hc3NldHMuYm9uYXBwZXRpdC5jb20vcGhvdG9zLzVjYTY4MGVmZjdjOWI1MTMwOWM5NWQyNi8xNjo5L3dfMjU2MCUyQ2NfbGltaXQvbHVpZ2lzLTIuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0p1bWJvIFBhbGFjZScsXG4gICAgICBhZGRyZXNzOiAnMTggSG9ybiBTdHJlZXQnLFxuICAgICAgdGFnczogWydJY2UgQ3JlYW0nLCAnRGVzc2VydCddLFxuICAgICAgY3JlYXRpb25fZGF0ZTogJzIwLzAyLzIwMjMnLFxuICAgICAgb3BlbmluZ19ob3VyczogWycxNzowMCAtIDIzOjAwJ10sXG4gICAgICBpbWFnZTogJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1FPUktOWm5xNV9uOU5vU2NyNlhXOUV6blJGdmVzQm1GU1ZwZyZ1c3FwPUNBVSdcbiAgICB9LFxuICBdO1xuICBcbiAgXG5cbiAgcmVzdGF1cmFudHNEYXRhLmZvckVhY2goKHJlc3RhdXJhbnQpID0+IHtcbiAgICBSZXN0YXVyYW50c0NvbGxlY3Rpb24uaW5zZXJ0KHJlc3RhdXJhbnQpXG4gIH0pXG59KVxuXG4iXX0=
