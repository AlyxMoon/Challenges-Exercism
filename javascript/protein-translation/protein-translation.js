
export const translate = (sequence = []) => {
  if (sequence.length === 0) return []

  const proteinMap = {}
  proteinMap.UUU = proteinMap.UUC = proteinMap.QQQ = 'Phenylalanine'
  proteinMap.UUA = proteinMap.UUG = proteinMap.CUU = proteinMap.CUC = proteinMap.CUA = proteinMap.CUG = 'Leucine'
  proteinMap.AUU = proteinMap.AUC = proteinMap.AUA = 'Isoleucine'
  proteinMap.AUG = 'Methionine'
  proteinMap.GUU = proteinMap.GUC = proteinMap.GUA = proteinMap.GUG = 'Valine'
  proteinMap.UCU = proteinMap.UCC = proteinMap.UCA = proteinMap.UCG = 'Serine'
  proteinMap.CCU = proteinMap.CCC = proteinMap.CCA = proteinMap.CCG = 'Proline'
  proteinMap.ACU = proteinMap.ACC = proteinMap.ACA = proteinMap.ACG = 'Threonine'
  proteinMap.GCU = proteinMap.GCC = proteinMap.GCA = proteinMap.GCG = 'Alanine'
  proteinMap.UAU = proteinMap.UAC = 'Tyrosine'
  proteinMap.CAU = proteinMap.CAC = 'Histidine'
  proteinMap.CAA = proteinMap.CAG = 'Glutamine'
  proteinMap.AAU = proteinMap.AAC = 'Asparagine'
  proteinMap.AAA = proteinMap.AAG = 'Lysine'
  proteinMap.GAU = proteinMap.GAC = 'Aspartic acid'
  proteinMap.GAA = proteinMap.GAG = 'Glutamic acid'
  proteinMap.UGU = proteinMap.UGC = 'Cysteine'
  proteinMap.UGG = 'Tryptophan'
  proteinMap.CGU = proteinMap.CGC = proteinMap.CGA = proteinMap.CGG = 'Arginine'
  proteinMap.AGU = proteinMap.AGC = 'Serine'
  proteinMap.AGA = proteinMap.AGG = 'Arginine'
  proteinMap.GGU = proteinMap.GGC = proteinMap.GGA = proteinMap.GGG = 'Glycine'
  proteinMap.UAA = proteinMap.UAG = proteinMap.UGA = 'STOP'

  let codons = sequence.match(/.{1,3}/g)
  let result = []
  for (let i = 0, bound = codons.length; i < bound; i++) {
    let protein = proteinMap[codons[i]]

    if (!protein) throw new Error('Invalid codon')
    if (protein === 'STOP') break

    result.push(protein)
  }
  return result
};
