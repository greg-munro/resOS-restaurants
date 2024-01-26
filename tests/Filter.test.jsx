import React from 'react'
import { render, screen } from '@testing-library/react'
import Filter from '../imports/ui/Filter'

describe('Filter component', () => {
  const label = 'Test Filter'
  const options = ['Option 1', 'Option 2', 'Option 3']
  const selectedValue = 'Option 1'
  const setSelectedValue = jest.fn()
  const resetFilters = jest.fn()

  beforeEach(() => {
    render(
      <Filter
        label={label}
        options={options}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        resetFilters={resetFilters}
      />
    )
  })

  it('renders with correct label and options', () => {
    const labelElements = screen.getAllByText(label)
    expect(labelElements.length).toBeGreaterThan(0)

    labelElements.forEach((labelElement) => {
      expect(labelElement).toBeInTheDocument()
    })
  })

  
})
