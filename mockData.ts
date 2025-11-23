import { Product, Shop } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Smart Laptop X1',
    price: 999.99,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaMbSyeH-WBZifxE0sPZBFlxOozxZ-9DHBdx-c11Y9o8MX4KU7q3N-CLPbEYdlmZfjlZylsUOvQwhzNVUopSFGMQXA_EVlj69BO9hPcdgqy6QFZu8YB_8kZIxd9ZLvmdRdNKBqC_EggJ8p7_4u59daA82xUKeWBTdQJeSnLYwCYdPxXy57Gn4AAsCDhMSL1ikCv_kb6cMXF2eENhLxvu8XVkM_0x91eOn_SLiCcQ5VaUtgcg_iJRU0u047d7Z1LTN4rjFxrpm0qRGx'
  },
  {
    id: '2',
    name: 'AirFlex Runners',
    price: 120.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVDNNXw59lb5KNjEp Ep8h5qg0kTame8F8GR_hVYAIIfJSkdXiZoXJzMiF1_8aYMqWgpxuaOXhMPF6kl044k_KgX6CPEV7S-aOSoFi6dJvwnHXRbiwNobOZ2guu8XMcHnBl0z6w7BxN8v-iLGwPd7ykR6lL6MIyuvjbiq8HgFwLhViixp2jZzwgFazRWQ2ScKtZdFeL7p5VnkV1In7dluzoFtajMqdFnPp7ShEFwjOdNGBJTxu5B0uxyGX5w9_0np6RoTD2FvrEIYBh09'
  },
  {
    id: '3',
    name: 'Artisan Coffee Mug',
    price: 25.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPInUBv4cMG8xcBkOg7czWOZXoSP-Rauxoz65oEZiBjyhbybLKRbuF2ZV-eNFe06HZhhDs8FEqFMErNl1lBsyYf8YoqGQJx2Ab0-VXgr1Hya77-w2skSheDn3F8Ny4BG4M3vEmGdQ23x-QgwK-JSVb5a2OlsLfcj5_vewuS1_1q9vS379KkR-KDELzsjd44P7XJGh6kARNUIQtMbIasPrrPqxE_rwlnIFaJRQUjRTsLYEPwNt0p-oyZ3icK9_2Rc7U7Lwm-3MBPTPQ'
  },
  {
    id: '4',
    name: 'Natural Glow Serum',
    price: 45.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9J4zAWgh-FxrMExpdrBcQ6LL8cF3knyzuPw9wgYI74SklLdij0IFm9-qiXbPun0Mh-sQK1KJlzgnDKKBnLzjkN25hxYLoaiwsV-jRMSx0tMxV0tCtYNd6Zf0S02gEkWwUziSoiG0djfmFpBg2Oawc2tDWSENZRuNXeju0tu6bSq9_rmCHy76pfD0xx2YbJRYeUigVpgcglmRciQcBdfvImX5d7se1EO3NpQG-TPc3ckjP6_Vu6arM-6yutnxJQ48r2SLQ7IhoIvbF'
  },
  {
    id: '5',
    name: 'Pro Audio Headphones',
    price: 249.00,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFjK26eZ_k6L6AcU-iwtGnulS6kJn8xmFYug9tKHz4jSl9MFYSJL7xeOlU-tZ67M-RykEZtYlsBj78AOsqUs8SvRSxv8nhsMB3gS7ak-hWkMGYOaxt4clI0N4PJyBUtLoolIfQ_lNceGeBxg63y3hts27kP5Dmy6UgaqRd_cyAPFgUsn1vXzARsWRjN11nwEptAI6D7_9niZTBFKLQHjlb6AbGGJeyY31oieHFeerOtqoH-oasbgpeHkVyGQtm2dAc28rC78YI12f3'
  }
];

export const SHOPS: Shop[] = [
  {
    id: 's1',
    name: 'The Daily Grind',
    category: 'Cafe',
    distance: 0.5,
    rating: 4.8,
    reviewCount: 251,
    isOpen: true,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlIczSupwiOu13FjIU6pZEQAdN-65ttqcnWEW5FE8xJplDKifUvBy3JWiuWWBI1b00pa69Kjh9VzIQ5WoeF-6zdj8q1BeEWr1tByTrIHRJ0yJ0E9vIQzBLHIGGSlHC36rZUMLQEOvnuGly0g-fTl0c6ki17XgO-HwHPpeNL9bOQ69bbNm-vM1XmOtRqDzQMIsVQm-i-yzz4gfTrodU5lEpqzNs0V5WxRchqxpuAFIsz5RnjFbbM4LXRP2kCFQrj5BVhpAtnkwQ1AyX'
  },
  {
    id: 's2',
    name: 'City Lights Books',
    category: 'Bookstore',
    distance: 1.2,
    rating: 4.9,
    reviewCount: 412,
    isOpen: true,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtNZzMsckqy1yKCIqyfsRZqYaUPDjTizikGaenujl2GSy4gfaqhHE5EaBoJg7xx1CA3mpWAEo1APS0JCCGs2sIKS0rsDVCvs4hDsEBIqV3VmZAGnUP0a2q_xeOljXJUyFZdO1PYs7x0V5kvQys1lXgCzyRujp5caPJ18UCwK-_8SFJ6U0ndHDjN3jh2EhfTwtuomduyxgzFeKzdy6J8vuBXbIaZpiZJN9PLQhKHhX1jG1znsNJ9-MXy-GuBKv76PDw4Q7qACNi7THe'
  },
  {
    id: 's3',
    name: 'Urban Threads',
    category: 'Boutique',
    distance: 0.8,
    rating: 4.7,
    reviewCount: 189,
    isOpen: false,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD8YVs3p-WIRoPr5vjtpU2jkgecZHp5o47hGaK29eEMcdfHC5w5h14Vggrzmd8kSAysJmQFfBbnoMd7TqENNP4uyA2-8DGVj6QOOQOjYQPYl-No1c8FGTErYjbt5L0hUNnksYKQ8NhqGT7_RYoYDahJYhgacs6VXAQkQpUicTYv7Et61EPONBmojPWUEu_L61hLPIXxGoY2MmvajNLNdXm3asU_UPGcayv2ttIi7Wr4d2q3Lze20c_tvn_4hbhAkM9HjYe24lgwQoS'
  },
  {
    id: 's4',
    name: 'Artisan Bakes',
    category: 'Bakery',
    distance: 2.1,
    rating: 4.9,
    reviewCount: 305,
    isOpen: true,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrmL0Xmux3SHA8pbgublPioMuuUm_yPf1xuMTet70MhqA3qjg91GpUHwhqE_8b_TRr9IvlMTVPWmGZJNghI2u6-8wK_d-fI4GRby9jiyho4ILRfI8_T3aq3QVu_OthVFnQ892XQGU87dTpNhR7QvjN8Ei_sQxCvaT6UxOBjFnN9B5hQj2ApknyAP0Sm5hNawf5W-uIxHvLL2N0JUR6JWmZLywzD4dW9HO_y34KN-4NSflkIwJWko_rJ5guP38ZiySU4acoMHHYmySg'
  }
];