import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';

import { Input } from './input';

export const FilterPopover = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-2"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <ul className="max-h-48 overflow-auto">
            {filteredItems.map((item, index) => (
              <DropdownMenuItem
                key={index}
                className="cursor-pointer px-2 py-1 hover:bg-gray-100"
              >
                {item}
              </DropdownMenuItem>
            ))}
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
