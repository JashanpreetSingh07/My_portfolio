import PyPDF2
import json

def get_text_and_links(pdf_path):
    output = []
    with open(pdf_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        for page_num in range(len(reader.pages)):
            page = reader.pages[page_num]
            text = page.extract_text()
            output.append(f"--- Page {page_num+1} Text ---\n{text}")
            if '/Annots' in page:
                for annot in page['/Annots']:
                    try:
                        annot_obj = annot.get_object()
                        if '/A' in annot_obj and '/URI' in annot_obj['/A']:
                            output.append(f"Link Annot: {annot_obj['/A']['/URI']}")
                    except Exception as e:
                        pass
    with open('pdf_text_links.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(output))

get_text_and_links("12306650JashanpreetSinghCV[1] (1) (3).pdf")
