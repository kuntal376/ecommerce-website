// Define the headers matching your MongoDB schema/Product state
export const CSV_HEADERS = [
    'name',
    'brand',
    'description',
    'category',
    'subCategory',
    'sku',
    'stockLevel',
    'basePrice',
    'salePrice',
    'taxClass',
    'image_url', // URL is easier for bulk than raw files
    'attributes' // JSON string for specific specs (RAM, Size, etc.)
];

// Sample data to help the user understand the format
const SAMPLE_ROW = [
    'iPhone 15 Pro',
    'Apple',
    'Titanium design smartphone',
    'Electronics',
    'Mobiles',
    'IP15P-128-BLK',
    '50',
    '999',
    '950',
    'Standard',
    'https://example.com/iphone.jpg',
    '{"ram":"8GB","rom":"128GB"}' // Example of JSON attribute
];

export const downloadTemplate = () => {
    // Combine headers and sample row
    const csvContent = [
        CSV_HEADERS.join(','),
        SAMPLE_ROW.join(',')
    ].join('\n');

    // Create a Blob
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'product_bulk_template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};