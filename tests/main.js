import assert from 'assert'
import { Meteor } from 'meteor/meteor'
import { mount } from 'enzyme' // Assuming you use Enzyme for testing
import { App } from '../client/App'

describe('resOs-restaurants', function () {
  it('package.json has correct name', async function () {
    const { name } = await import('../package.json')
    assert.strictEqual(name, 'resOs-restaurants')
  })

  if (Meteor.isClient) {
    it('client is not server', function () {
      assert.strictEqual(Meteor.isServer, false)
    })

    it('renders home screen by default', function () {
      const wrapper = mount(<App />)
      assert.strictEqual(wrapper.find('.home-search').exists(), true)
    })

    it('changes screen to all restaurants on button click', function () {
      const wrapper = mount(<App />)
      wrapper.find('.all').simulate('click')
      assert.strictEqual(wrapper.find('.detail-header').exists(), true)
    })

    it('filters restaurants based on search term', function () {
      const wrapper = mount(<App />)
      wrapper.find('SearchBar').prop('onSubmit')('pizza')
      assert.strictEqual(wrapper.find('.restaurant-list').exists(), true)
      assert.strictEqual(wrapper.find('.not-found').exists(), false)
    })

    it('toggles dark mode on button click', function () {
      const wrapper = mount(<App />)
      wrapper.find('.toggle').simulate('click')
      assert.strictEqual(wrapper.find('.dark-mode').exists(), true)
    })
  }

  if (Meteor.isServer) {
    it('server is not client', function () {
      assert.strictEqual(Meteor.isClient, false)
    })
  }

  // INTEGRATION
  it('displays restaurants from the database', function () {
    // Insert some test data into the database
    RestaurantsCollection.insert({
      name: 'Test Restaurant',
      address: '123 Test St',
      tags: ['test', 'restaurant'],
      creation_date: new Date(),
      opening_hours: '9:00 AM - 5:00 PM',
      image: 'test.jpg',
    })
  })
})
